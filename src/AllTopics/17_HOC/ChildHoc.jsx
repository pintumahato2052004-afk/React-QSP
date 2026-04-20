import React from 'react'
import Hoc from './Hoc';

const ChildHOC = () => {
  return (
    <div className="text-center p-5">
        <h1 className="font-bold text-4xl my-5">
            Child HOC
        </h1>
        
    </div>
  )
};

export default Hoc(ChildHOC);