import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar/SideBar'

const Layout = () => {
    return (
        <div className='app'>
            <SideBar />
            <div className="main">
                <Outlet />
            </div>
        </div>
    )
}

export default Layout