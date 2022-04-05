import React from 'react'
import { useSelector } from 'react-redux'
import { Link, Outlet } from 'react-router-dom'
import SearchBox from './SearchBox/SearchBox'
import SideBar from './SideBar/SideBar'
import { BiLogInCircle } from 'react-icons/bi'

const Layout = () => {
    const isLogin = useSelector(state => state.users.isLogin)
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
            </div>
        </div >
    )
}

export default Layout