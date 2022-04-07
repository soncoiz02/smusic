import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
const SearchBox = () => {
    const [searchVal, setSearchVal] = useState('')
    const navigate = useNavigate()
    const handleSearchSong = (e) => {
        e.preventDefault()
        if (searchVal.trim() !== '') {
            navigate(`/search?q=${searchVal}`)
            setSearchVal('')
        }
    }
    return (
        <div className='search-box'>
            <form onSubmit={(e) => handleSearchSong(e)}>
                <input
                    type="text"
                    placeholder='Search name or singer'
                    value={searchVal}
                    onChange={(e) => setSearchVal(e.target.value)}
                />
                <button type='submit'>
                    <FaSearch />
                </button>
            </form>
        </div>
    )
}

export default SearchBox