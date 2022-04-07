import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Pagination = ({ listSong, currentPage, setIsLoading }) => {
    const [listPageNum, setListPageNum] = useState([])
    const { pathname } = useLocation()
    useEffect(() => {
        const listSongLength = listSong.length
        if (listSongLength > 0) {
            let listNum = []
            for (let i = 0; i < Math.ceil(listSongLength / 20); i++) {
                listNum.push(i + 1)
            }
            setListPageNum(listNum)
        }
    }, [listSong])
    return (
        <div className='pagination'>
            {
                listPageNum.length > 0 &&
                listPageNum.map((e) =>
                    <Link to={`${pathname}?_page=${e}`} className={`btn ${e === currentPage ? 'active' : ''}`} key={e} onClick={() => setIsLoading(true)} >{e}</Link>
                )
            }
        </div>
    )
}

export default Pagination