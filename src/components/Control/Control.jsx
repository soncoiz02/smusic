import React, { useEffect, useRef, useState } from 'react'
import { ImLoop, ImVolumeMedium } from 'react-icons/im'
import { BsFillPlayFill, BsFillPauseFill } from 'react-icons/bs'
import { GiPreviousButton, GiNextButton } from 'react-icons/gi'
import ProgressBar from './ProgressBar'
import { getOne } from '../../api/songs'
import { setDetailSong } from '../../redux/action/song'
import { useDispatch, useSelector } from 'react-redux'

const Control = ({ audio }) => {
    const audioRef = useRef(null)
    const dispatch = useDispatch()
    const isPlayingSong = useSelector(state => state.songs.detail)
    const listSongs = useSelector(state => state.songs.songs)

    const [isPlay, setIsPlay] = useState(true)
    const [activeVolume, setActiveVolume] = useState(false)
    const [isLoop, setIsLoop] = useState(false)

    const [percent, setPercent] = useState(0)
    const [duration, setDuration] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)
    const [progressValue, setProgressValue] = useState(0)
    const [volumeVal, setVolumeVal] = useState(100)

    const getDetailSong = async (index) => {
        const data = listSongs[index]
        if (data) dispatch(setDetailSong({ ...data, index: index }))
    }

    const getPercent = (e) => {
        const seekTime = audioRef.current.duration / 100 * e.target.value
        audioRef.current.currentTime = seekTime
        setPercent(e.target.value)
    }

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
        if (time >= e.currentTarget.duration) {
            getDetailSong(isPlayingSong.index + 1)
        }
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

    const handlePlayNextSong = () => {
        getDetailSong(isPlayingSong.index + 1)
    }

    const handlePlayPrevSong = () => {
        getDetailSong(isPlayingSong.index - 1)
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
                    <div className="prev" onClick={handlePlayPrevSong}>
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
                    <div className="next" onClick={handlePlayNextSong}>
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
            <ProgressBar
                onChange={getPercent}
                percent={percent}
                value={progressValue}
                duration={duration}
                currentTime={currentTime}
            />
        </div>
    )
}

export default Control