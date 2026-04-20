import React from 'react'

const Sorting = ({sortBy, setSortBy}) => {
    
  return (
    <>

    <label htmlFor="sort">Sort</label>

    <select className='border' id="sort" name="sort" value={sortBy} onChange={(e)=> setSortBy(e.target.value)}>
        <option value="">All</option>
        <option value="title">Title</option>
        <option value="views">Views</option>
    </select>
    </>
  )
}

export default Sorting;