import React, { useEffect, useRef } from 'react'
import { FaHome } from 'react-icons/fa'
import { BsMusicNoteList, BsBookmarkHeartFill } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'

const navItems = [
    {
        name: "Home",
        path: "/",
        icon: <FaHome />
    },
    {
        name: "Top Song",
        path: "/top-song",
        icon: <BsMusicNoteList />
    },
    {
        name: "Liked Song",
        path: "/liked",
        icon: <BsBookmarkHeartFill />
    }
]

const SideBar = ({ activeSidebar, setActiveSidebar }) => {
    const sidebarRef = useRef(null)
    useEffect(() => {
        const handleClickOutSide = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setActiveSidebar(false)
            }
        }
        if (window.matchMedia("(max-width: 768px)").matches) {
            document.addEventListener('mousedown', handleClickOutSide)
        }
    }, [])

    return (
        <div className={`sidebar ${activeSidebar ? 'active' : ''}`} ref={sidebarRef}>
            <ul className="nav">
                {
                    navItems.map((item, index) =>
                        <li key={index}>
                            <NavLink to={item.path}>
                                {item.icon}
                                {item.name}
                            </NavLink>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default SideBar