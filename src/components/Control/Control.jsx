import React, { useRef, useState } from 'react'
import { ImLoop, ImVolumeMedium } from 'react-icons/im'
import { BsFillPlayFill, BsFillPauseFill } from 'react-icons/bs'
import { GiPreviousButton, GiNextButton } from 'react-icons/gi'

const Control = ({ audio }) => {
    const audioRef = useRef(null)

    const [isPlay, setIsPlay] = useState(true)
    const [activeVolume, setActiveVolume] = useState(false)
    const [isLoop, setIsLoop] = useState(false)

    const [percent, setPercent] = useState(0)
    const [duration, setDuration] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)
    const [progressValue, setProgressValue] = useState(0)
    const [volumeVal, setVolumeVal] = useState(100)

    const loadedData = (e) => {
        const duration = e.currentTarget.duration.toFixed(2)
        setDuration(duration)
    }

    const getCurrentTime = (e) => {
        const percent = ((e.currentTarget.currentTime / e.currentTarget.duration) * 100).toFixed(2)
        const time = e.currentTarget.currentTime
        setPercent(percent)
        setProgressValue(percent)
        setCurrentTime(time.toFixed(2))
        // if (time >= e.currentTarget.duration) {
        //     const newSongIndex = listSongs.indexOf(songDetail) + 1
        //     updateSongDetail(newSongIndex)
        // }
    }

    const handleChangeVolume = (e) => {
        setVolumeVal(e.target.value)
        audioRef.current.volume = e.target.value / 100
    }

    const handlePlay = () => {
        isPlay ? audioRef.current.pause() : audioRef.current.play()
        setIsPlay(!isPlay)
    }

    const handleLoop = () => {
        isLoop ? audioRef.current.loop = false : audioRef.current.loop = true
        setIsLoop(!isLoop)
    }

    return (
        <div className='control'>
            <audio src={audio}
                className="audio"
                ref={audioRef}
                onLoadedData={loadedData}
                onTimeUpdate={getCurrentTime}
                autoPlay
                onPlay={() => setIsPlay(true)}
                onPause={() => setIsPlay(false)}
            ></audio>
            <div className="panel">
                <div className={`btn loop ${isLoop ? 'active' : ''}`} onClick={handleLoop}>
                    <ImLoop />
                </div>
                <div className="btn handle-play">
                    <div className="prev">
                        <GiPreviousButton />
                    </div>

                    <div className="play" onClick={handlePlay}>
                        {
                            isPlay ?
                                <BsFillPauseFill />
                                :
                                <BsFillPlayFill />
                        }
                    </div>
                    <div className="next">
                        <GiNextButton />
                    </div>
                </div>
                <div className="btn volume">
                    <div className={`setting ${activeVolume ? 'active' : ''}`}>
                        <input
                            type="range"
                            min={0}
                            max={100}
                            value={volumeVal}
                            step={1}
                            onChange={(e) => handleChangeVolume(e)}
                        />
                    </div>
                    <ImVolumeMedium onClick={() => setActiveVolume(!activeVolume)} />
                </div>
            </div>
            <div className="progress-bar">
                <input type="range" />
            </div>
        </div>
    )
}

export default Control