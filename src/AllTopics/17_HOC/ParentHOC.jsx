import React from 'react'
import ChildHOC from './ChildHOC';


const ParentHOC = () => {
  return (
    <div className="text-center p-5"> 
        <h1 className="font-bold text-4xl my-5">
            Learn Higher Order Component
        </h1>

        <hr />

        <ChildHOC/>
    </div>
  );
};

export default ParentHOC;