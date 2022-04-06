import React from 'react'
import { useSelector } from 'react-redux'
import { Link, Outlet } from 'react-router-dom'
import SearchBox from './SearchBox/SearchBox'
import SideBar from './SideBar/SideBar'
import { BiLogInCircle } from 'react-icons/bi'
import { BsMusicNoteBeamed, BsMusicNote } from 'react-icons/bs'
import Control from './Control/Control'
const Layout = () => {
    const isLogin = useSelector(state => state.users.isLogin)
    const detailSong = useSelector(state => state.songs.detail)
    return (
        <div className='app'>
            <SideBar />
            <div className="main">
                <div className="header">
                    <SearchBox />
                    {
                        isLogin ?
                            <div className="user"></div>
                            :
                            <Link to="/login" className="btn-login">
                                Login <BiLogInCircle />
                            </Link>
                    }
                </div>
                <div className="container">
                    <Outlet />
                </div>
                {
                    Object.keys(detailSong).length !== 0 &&
                    <div className="play-bar">
                        <div className="detail">
                            <div className="name">{detailSong.name}</div>
                            <div className="singer">{detailSong.singer}</div>
                        </div>
                        <div className="control-bar">
                            <Control audio={detailSong.audio} />
                        </div>
                        <div className="img">
                            <img src={detailSong.avatar} alt="" />
                            <div className="notes">
                                <BsMusicNoteBeamed />
                                <BsMusicNote />
                                <BsMusicNoteBeamed />
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div >
    )
}

export default Layout