import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar/SideBar'

const Layout = () => {
    return (
        <div className='app'>
            <SideBar />
            <div className="main">
                <div className="container">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Layout