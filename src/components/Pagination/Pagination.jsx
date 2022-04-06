import React, { useEffect, useState } from 'react'

const Pagination = ({ listSongLength, setFilter, filter }) => {
    const [listPageNum, setListPageNum] = useState([])
    useEffect(() => {
        if (listSongLength > 0) {
            let listNum = []
            for (let i = 0; i < Math.floor(listSongLength / 20); i++) {
                listNum.push(i + 1)
            }
            setListPageNum(listNum)
        }
    }, [filter])
    return (
        <div className='pagination'>
            {
                listPageNum.length > 0 &&
                listPageNum.map((e) =>
                    <div className={`btn ${e === filter._page ? 'active' : ''}`} key={e} onClick={() => setFilter({ ...filter, _page: e })}>{e}</div>
                )
            }
        </div>
    )
}

export default Pagination