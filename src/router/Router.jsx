import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout'
import Home from '../pages/Home/Home'
import LikedSong from '../pages/LikedSong/LikedSong'
import Login from '../pages/Login/Login'
import NotFound from '../pages/NotFound/NotFound'
import SearchPage from '../pages/SearchPage/SearchPage'
import TopSong from '../pages/TopSong/TopSong'
import TopSongList from '../pages/TopSong/TopSongList'

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout />} >
                <Route index element={<Home />} />
                <Route path='top-song'>
                    <Route index element={<TopSong />} />
                    <Route path=':type' element={<TopSongList />} />
                </Route>
                <Route path='liked' element={<LikedSong />} />
                <Route path='search' element={<SearchPage />} />
                <Route path='login' element={<Login />} />
                <Route path='*' element={<NotFound />} />
            </Route>
        </Routes>
    )
}

export default Router