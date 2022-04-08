import React, { useEffect, useState } from 'react'
import { useLocation, useParams, useSearchParams } from 'react-router-dom'
import { getByType } from '../../api/songs'
import { topSong } from './TopSong'
import queryString from 'query-string'
import ListSong from '../../components/ListSong/ListSong'
import Pagination from '../../components/Pagination/Pagination'
import Loading from '../../components/Loading/Loading'
import { useDispatch } from 'react-redux'
import { setSongs } from '../../redux/action/song'

const ListSongType = () => {
    const { type } = useParams()
    const { search } = useLocation()
    const [typeSong, setTypeSong] = useState()
    const [listSong, setListSong] = useState([])
    const [listAllSong, setListAllSong] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const dispatch = useDispatch()


    useEffect(() => {
        handleSetSongType()
        handleGetListSong()
        handleGetAllSongByType()
        window.scrollTo(0, 0)
        setTimeout(() => {
            setIsLoading(false)
        }, 2000)
    }, [search.slice(-1)])

    const handleSetSongType = () => {
        const listType = topSong.map(e => e.list)
        listType.forEach(e => {
            const detailType = e.find(e => e.type === type)
            if (detailType) setTypeSong(detailType)
        })
    }

    const handleGetListSong = async () => {
        const data = await getByType(type, +search.slice(-1))
        if (data) {
            setListSong(data)
            dispatch(setSongs(data))
        }
    }

    const handleGetAllSongByType = async () => {
        const data = await getByType(type, 0)
        if (data) {
            setListAllSong(data)
        }
    }

    return (
        <>
            {
                isLoading ?
                    <Loading /> :
                    <div className='song-type'>
                        <div className="song-type-content">
                            {
                                typeSong &&
                                <div className="desc">
                                    <div className="img">
                                        <img src={typeSong.img} alt="" />
                                    </div>
                                    <div className="name">{typeSong.name}</div>
                                </div>
                            }
                            <div className="list-song-type">
                                {
                                    listSong &&
                                    <ListSong songs={listSong} />
                                }
                            </div>
                        </div>
                        <Pagination listSong={listAllSong} currentPage={+search.slice(-1)} setIsLoading={setIsLoading} />
                    </div>
            }
        </>

    )
}

export default ListSongType