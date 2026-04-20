import React from 'react'

const SearchBar = ({query,setQuery}) => {
    return <input type="search" name='search' id='search' placeholder='Search here...' className='border' value={query} onChange={(e) => setQuery(e.target.value)} />
}

export default SearchBar;