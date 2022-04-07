import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ListSong from '../../components/ListSong/ListSong'
import Loading from '../../components/Loading/Loading'
import { setSongs } from '../../redux/action/song'

const LikedSong = () => {
    const isLogin = useSelector(state => state.users.isLogin)
    const userInfor = useSelector(state => state.users.infor)
    const [likedSongs, setLikedSongs] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const dispatch = useDispatch()

    useEffect(() => {
        if (isLogin) {
            const likedSongs = userInfor.likedSongs
            setLikedSongs(likedSongs)
            dispatch(setSongs(likedSongs))
        }
        window.scrollTo(0, 0)
        setTimeout(() => {
            setIsLoading(false)
        }, 2000)
    }, [])

    return (
        <>
            {
                isLoading ?
                    <Loading /> :
                    <div className='liked-song'>
                        {
                            isLogin ?
                                <div className='liked-song-content'>
                                    {
                                        likedSongs.length > 0 ?
                                            <>
                                                <h2>Your liked songs</h2>
                                                <ListSong songs={likedSongs} />
                                            </>
                                            : <h2>Looks like you don't like any of the songs</h2>
                                    }
                                </div>
                                :
                                <div className="require-login">
                                    <h2>Please login to see your liked songs</h2>
                                    <svg>
                                        <path className='path' fill='black' strokeWidth={5} ></path>
                                    </svg>
                                </div>
                        }
                    </div>
            }
        </>

    )
}

export default LikedSong