import React, { useReducer } from 'react'
let initialState = 0;
const reducerFunc = (prevSatate, action)=>{
    switch (action) {
        case "incre":
            return prevSatate + 1;
            
        case "decre":
            return prevSatate - 1;

        case "reset":
            return 0;
    }
};

const ReducerCounter = () => {
    const[count, dispatch] = useReducer(reducerFunc, initialState);
  return (
    <div>
        <h1 className="text-center text-4xl font-bold">Learn useReducer hook</h1>

        <p className="text-center">
            useReducer is a state management hook used for complex state management 
        </p>
        <h1 className="text-center text-4xl font-semibold">Counter: {count}</h1>
        <button className="p-2 bg-amber-400 rounded-2xl" onClick={()=>dispatch("incre")}>
            increment
        </button>
        <button className="p-2 bg-amber-400 rounded-2xl" onClick={()=>dispatch("decre")}>
            decrement
        </button>
        <button className="p-2 bg-amber-400 rounded-2xl" onClick={()=>dispatch("reset")}>
            reset
        </button>
    </div>
  )
}

export default ReducerCounter;