import React from 'react'
import { BsFillPlayFill, BsHeart, BsHeartFill, BsPauseFill } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { getOne } from '../../api/songs'
import { setDetailSong } from '../../redux/action/song'

const ListSong = ({ songs }) => {
    const detailSong = useSelector(state => state.songs.detail)
    const dispatch = useDispatch()

    const checkIsPlaying = (id) => {
        return detailSong.id === id
    }

    const handlePlaySong = async (id) => {
        const data = await getOne(id)
        if (data) dispatch(setDetailSong(data))
    }

    return (
        <div className='list-songs'>
            {songs &&
                songs.map(song =>
                    <div className={`song ${checkIsPlaying(song.id) ? 'active' : ''}`} key={song.id}>
                        <div className="img">
                            <img src={song.avatar} alt="" />
                        </div>
                        <div className="main-content">
                            <div className="detail">
                                <div className="name">{song.name}</div>
                                <div className="singer">{song.singer}</div>
                            </div>
                            <div className="option">
                                <div className="btn like">
                                    <BsHeart />
                                </div>
                                <div className="btn play" onClick={() => handlePlaySong(song.id)}>
                                    {
                                        checkIsPlaying(song.id) ?
                                            <BsPauseFill /> :
                                            <BsFillPlayFill />
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default ListSong