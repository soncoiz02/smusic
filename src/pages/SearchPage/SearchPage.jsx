import React, { useEffect, useState } from 'react'
import { useLocation, useParams, useSearchParams } from 'react-router-dom'
import { getByName, getBySearch, getBySinger } from '../../api/songs'
import ListSong from '../../components/ListSong/ListSong'

const SearchPage = () => {
    const { search } = useLocation()
    const [songsByName, setSongsByName] = useState([])
    const [songsBySinger, setSongsBySinger] = useState([])
    useEffect(() => {
        const searchFilter = search.slice(3)
        getSongsByName(searchFilter)
        getSongsBySinger(searchFilter)
    }, [search])

    const getSongsByName = async (name) => {
        const data = await getByName(name)
        setSongsByName(data)
    }

    const getSongsBySinger = async (singer) => {
        const data = await getBySinger(singer)
        setSongsBySinger(data)
    }

    return (
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
    )
}

export default SearchPage