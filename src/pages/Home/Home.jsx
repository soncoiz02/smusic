import React, { useEffect, useState } from 'react'
import { getTop10 } from '../../api/songs'
import ListSong from '../../components/ListSong/ListSong'
const Home = () => {
    const [top10, setTop10] = useState([])
    useEffect(() => {
        handleGetTopSong()
    }, [])
    const handleGetTopSong = async () => {
        const data = await getTop10()
        if (data) setTop10(data)
    }
    return (
        <div className='home'>
            <div className="content">
                <h1 className='title'>Wellcom to <span>SMUSIC</span></h1>
                <p className="sub-title">Where you can listen to music Free</p>
                <div className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, fugiat consequatur dolore sequi eos laborum quod voluptas voluptates molestiae aspernatur! Minus, sit expedita! Debitis expedita sequi est consequatur nulla error!</div>
            </div>
            <div className="top-10">
                <h2>Top 10 Popular Songs</h2>
                <ListSong songs={top10} />
            </div>
        </div>
    )
}

export default Home