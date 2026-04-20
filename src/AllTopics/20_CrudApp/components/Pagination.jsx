import React, { useState } from 'react'

const Pagination = ({ skip, setSkip }) => {

    return (
        <div className='flex gap-5 my-4'>
            <button onClick={() => setSkip((prev) => Math.max(0, prev - 10))}
                disabled={skip === 0 && true}
                className='bg-blue-500 text-white px-3 py-1 rounded disabled:bg-blue-300 cursor-pointer'
            >
                Prev</button>
            <button onClick={() => setSkip((prev) => prev + 10)}
                className='bg-blue-500 text-white px-3 py-1 rounded cursor-pointer'
            >
                next</button>
        </div>
    )
}

export default Pagination;