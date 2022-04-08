import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { getByName, getBySinger } from '../../api/songs'
import ListSong from '../../components/ListSong/ListSong'
import Loading from '../../components/Loading/Loading'
import { setSongs } from '../../redux/action/song'

const SearchPage = () => {
    const { search } = useLocation()
    const [songsByName, setSongsByName] = useState([])
    const [songsBySinger, setSongsBySinger] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const dispatch = useDispatch()

    useEffect(() => {
        const searchFilter = search.slice(3)
        getSongsByName(searchFilter)
        getSongsBySinger(searchFilter)
        if (songsByName || songsBySinger) {
            const listSongs = [...songsByName, ...songsBySinger]
            dispatch(setSongs(listSongs));
        }
        window.scrollTo(0, 0)
        setTimeout(() => {
            setIsLoading(false)
        }, 2000)
    }, [search])

    const getSongsByName = async (name) => {
        const data = await getByName(name)
        if (data) {
            setSongsByName(data)
        }
    }

    const getSongsBySinger = async (singer) => {
        const data = await getBySinger(singer)
        if (data) {
            setSongsBySinger(data)
        }
    }

    return (
        <>
            {
                isLoading ?
                    <Loading /> :
                    <div className='search-page'>
                        {
                            songsByName.length > 0 || songsBySinger.length > 0 ?
                                <>
                                    <h2>Search result for <span>"{decodeURI(search.slice(3))}"</span> </h2>
                                    {
                                        songsByName.length > 0 &&
                                        <div className='cover'>
                                            <p className="title">Song name </p>
                                            <ListSong songs={songsByName} />
                                        </div>
                                    }
                                    {
                                        songsBySinger.length > 0 &&
                                        <div className='cover'>
                                            <p className="title">Singer name </p>
                                            <ListSong songs={songsBySinger} />
                                        </div>
                                    }

                                </> :
                                <>
                                    <h2>No result for <span>"{decodeURI(search.slice(3))}"</span> </h2>
                                </>
                        }
                    </div>
            }
        </>
    )
}

export default SearchPage