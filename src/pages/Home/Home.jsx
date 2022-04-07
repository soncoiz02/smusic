import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getTop10 } from '../../api/songs'
import ListSong from '../../components/ListSong/ListSong'
import Loading from '../../components/Loading/Loading'
import { setSongs } from '../../redux/action/song'
const Home = () => {
    const [top10, setTop10] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const dispatch = useDispatch()
    useEffect(() => {
        handleGetTopSong()
        window.scrollTo(0, 0)
        setTimeout(() => {
            setIsLoading(false)
        }, 2000)
    }, [])
    const handleGetTopSong = async () => {
        const data = await getTop10()
        if (data) {
            setTop10(data)
            dispatch(setSongs(data))
        }
    }
    return (
        <>
            {
                isLoading ?
                    <Loading />
                    :
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

            }
        </>
    )
}

export default Home