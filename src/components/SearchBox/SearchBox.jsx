import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
const SearchBox = () => {
    const [searchVal, setSearchVal] = useState('')
    return (
        <div className='search-box'>
            <form>
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