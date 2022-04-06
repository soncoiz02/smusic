import React, { useState, useEffect, useRef } from 'react'

const ProgressBar = ({ onChange, percent, currentTime, duration }) => {
    const [position, setPosition] = useState(0)
    const [marginLeft, setMarginLeft] = useState(0)
    const [progressBarWidth, setProgressBarWidth] = useState(0)

    const rangeRef = useRef()
    const thumbRef = useRef()

    useEffect(() => {
        const rangeWidth = rangeRef.current.getBoundingClientRect().width
        const thumbWidth = thumbRef.current.getBoundingClientRect().width
        const centerThumb = (thumbWidth / 100) * percent * -1
        const centerProgressBar =
            thumbWidth + (rangeWidth / 100) * percent - (thumbWidth / 100) * percent
        setPosition(percent)
        setMarginLeft(centerThumb)
        setProgressBarWidth(centerProgressBar)
    }, [percent])

    const secondsToHms = (seconds) => {
        if (!seconds) return '00 : 00'
        let duration = seconds

        let hours = duration / 3600
        duration = duration % 3600

        let min = parseInt(duration / 60)
        duration = duration % 60

        let sec = parseInt(duration)

        if (min < 10) {
            min = `0${min}`
        }
        if (sec < 10) {
            sec = `0${sec}`
        }

        if (parseInt(hours, 10) > 0) {
            return `${parseInt(hours)} : ${min} : ${sec}`
        }
        else if (min === 0) {
            return `00 : ${sec}`
        }
        else {
            return `${min} : ${sec}`
        }
    }

    return (
        <div className="progress-bar">
            <div className="timer">{secondsToHms(currentTime)}</div>
            <div className='progress-bar-container'>
                <div
                    className='progress-bar-cover'
                    style={{
                        width: `${progressBarWidth}px`
                    }}
                ></div>
                <div
                    className='thumb'
                    ref={thumbRef}
                    style={{
                        left: `${position}%`,
                        marginLeft: `${marginLeft}px`
                    }}
                ></div>
                <input
                    type='range'
                    value={position}
                    ref={rangeRef}
                    step='0.01'
                    className='range'
                    onChange={onChange}
                />
            </div>
            <div className="timer">{secondsToHms(duration)}</div>
        </div>
    )
}

export default ProgressBar
