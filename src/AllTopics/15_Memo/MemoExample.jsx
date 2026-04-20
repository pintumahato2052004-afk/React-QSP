import React, { useCallback, useMemo, useState } from 'react'
import MemoChild from './MemoChild';

const MemoExample = () => {

    const[add, setAdd] = useState(0);
    const[minus, setMinus] = useState(100);

    // function multiply(){
    //     console.log("I am multiply");
    //     return add * 5;
    // }

    //!it retruns memoized value
    let multiply = useMemo(()=>{
        console.log("I am multiply");
        return add * 5;
    }, [add])

    const display = useCallback(()=>{
        console.log("I am display");
    },[]);



  return (
    <div className="text-center p-5">
        <h1 className="text-4xl font-bold mb-5 bg-amber-900 text-white rounded-3xl">
            Learn useMemo and useCallBack
        </h1>

        <article className="my-2">
            addition: {add}
            <button 
                className="ms-5 bg-green-300 px-4 rounded" onClick={()=>setAdd((prev) =>prev+1)}>
                increment
            </button>
        </article>

        <article className="my-2">
            Subscription: {minus}
            <button 
                className="ms-5 bg-gray-300 px-4 rounded" onClick={()=>setMinus((prev)=>prev-1)}>
                decrement
            </button>
        </article>

        <article className="my-2">
            multiplication: {multiply}
        </article>

        <hr />

        <MemoChild display = {display}/>

    </div>
  )
}

export default MemoExample;