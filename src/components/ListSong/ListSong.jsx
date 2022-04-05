import React from 'react'
import { BsFillPlayFill, BsHeart, BsHeartFill, BsFillPauseFill } from 'react-icons/bs'

const ListSong = ({ songs }) => {
    return (
        <div className='list-songs'>
            {songs &&
                songs.map((song, index) =>
                    <div className="song" key={index}>
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
                                <div className="btn play">
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