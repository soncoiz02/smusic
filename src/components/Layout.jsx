import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate, Outlet, useNavigate } from 'react-router-dom'
import SearchBox from './SearchBox/SearchBox'
import SideBar from './SideBar/SideBar'
import { BiLogInCircle, BiLogOutCircle } from 'react-icons/bi'
import { BsMusicNoteBeamed, BsMusicNote } from 'react-icons/bs'
import Control from './Control/Control'
import { setIsLogin } from '../redux/action/user'
import { getAuth, signOut } from 'firebase/auth'
import app from '../firebase/config'
const auth = getAuth(app)

const Layout = () => {
    const navigate = useNavigate()

    const userInfor = useSelector(state => state.users.infor)
    const isLogin = useSelector(state => state.users.isLogin)
    const detailSong = useSelector(state => state.songs.detail)

    const dispatch = useDispatch()

    window.addEventListener('unload', () => {
        signOut(auth)
    })

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                dispatch(setIsLogin(false))
                navigate('/')
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='app'>
            <SideBar />
            <div className="main">
                <div className="header">
                    <SearchBox />
                    {
                        isLogin ?
                            <div className="user">
                                <div className="img">
                                    <img src={userInfor.avt} alt="" />
                                </div>
                                <div className="detail">
                                    <div className="name">{userInfor.name}</div>
                                    <div className="btn-logout" onClick={handleLogout}>
                                        Logout
                                        <BiLogOutCircle />
                                    </div>
                                </div>
                            </div>
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