import React from 'react'
import { BsFillPlayFill, BsHeart, BsHeartFill, BsFillPauseFill } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { getOne } from '../../api/songs'
import { setDetailSong } from '../../redux/action/song'

const ListSong = ({ songs }) => {
    const dispatch = useDispatch()

    const handlePlaySong = async (id) => {
        const data = await getOne(id)
        if (data) dispatch(setDetailSong(data))
    }

    return (
        <div className='list-songs'>
            {songs &&
                songs.map(song =>
                    <div className="song" key={song.id}>
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
                                    <BsFillPlayFill />
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