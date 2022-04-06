import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getByType } from '../../api/songs'
import { topSong } from './TopSong'
import queryString from 'query-string'
import ListSong from '../../components/ListSong/ListSong'

const ListSongType = () => {
    const { type } = useParams()
    const [typeSong, setTypeSong] = useState()
    const [listSong, setListSong] = useState()
    const [filter, setFilter] = useState({
        _page: 1,
        _limit: 20
    })

    useEffect(() => {
        handleSetSongType()
        handleGetListSong()
    }, [filter])

    const handleSetSongType = () => {
        const listType = topSong.map(e => e.list)
        listType.forEach(e => {
            const detailType = e.find(e => e.type === type)
            if (detailType) setTypeSong(detailType)
        })
    }

    const handleGetListSong = async () => {
        const param = queryString.stringify(filter)
        const data = await getByType(type, param)
        if (data) setListSong(data)
    }
    return (
        <div className='song-type'>
            {
                typeSong &&
                <div className="type-song">
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
    )
}

export default ListSongType