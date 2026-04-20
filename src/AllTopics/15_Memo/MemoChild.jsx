import React, { memo } from 'react'

const MemoChild = () => {
    console.log("I am Memo child component");
  return (
    <div>
        <h1 className="text-4xl font-bold mb-5 bg-orange-600 text-white rounded-3xl mt-5">
            Memo Child Component
        </h1>
    </div>
  )
}

export default memo(MemoChild);
//React.memo() OR memo() is used to Memoized a component until its props are unchenged.