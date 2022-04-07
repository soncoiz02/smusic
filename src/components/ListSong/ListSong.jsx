import React, { useState } from 'react'
import { BsFillPlayFill, BsHeart, BsPauseFill, BsHeartFill } from 'react-icons/bs'
import { FaRegTimesCircle } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { updateLikedSongs } from '../../firebase/user'
import { setDetailSong } from '../../redux/action/song'
import { setUserInfor } from '../../redux/action/user'


const ListSong = ({ songs }) => {
    const detailSong = useSelector(state => state.songs.detail)
    const userInfor = useSelector(state => state.users.infor)
    const isLogin = useSelector(state => state.users.isLogin)
    const dispatch = useDispatch()

    const [displayPopup, setDisplayPopup] = useState(false)

    const checkIsPlaying = (id) => {
        return detailSong.id === id
    }

    const handlePlaySong = (id, index) => {
        const data = songs.find(song => song.id === id)
        if (data) dispatch(setDetailSong({ ...data, index }))
    }

    const handleLikeSong = async (id) => {
        if (isLogin) {
            const data = songs.find(song => song.id === id)
            let userLikedSongs = userInfor.likedSongs
            if (userLikedSongs.find(song => song.id === id)) {
                userLikedSongs = userLikedSongs.filter(song => song.id !== id)
            }
            else {
                userLikedSongs.push(data)
            }
            await updateLikedSongs(userLikedSongs, userInfor.uid)
            dispatch(setUserInfor({ ...userInfor, likedSongs: userLikedSongs }))
        }
        else {
            setDisplayPopup(true)
        }

    }

    return (
        <div className='list-songs'>
            {
                displayPopup &&
                <div className="popup">
                    <p>You must login to like a song</p>
                    <div className="btn-close" onClick={() => setDisplayPopup(false)}>
                        <FaRegTimesCircle />
                    </div>
                </div>
            }
            {songs &&
                songs.map((song, index) =>
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
                                <div className="btn like" onClick={() => handleLikeSong(song.id)}>
                                    {
                                        userInfor?.likedSongs?.find(item => item.id === song.id) ?
                                            <BsHeartFill /> :
                                            <BsHeart />
                                    }
                                </div>
                                <div className="btn play" onClick={() => handlePlaySong(song.id, index)}>
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