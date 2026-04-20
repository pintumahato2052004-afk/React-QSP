import React, { useReducer } from 'react'

const initialState = [{text:"Default", id:12}];
const reducerFunc = (prev, action)=>{
    console.log(action.type);
    switch (action.type) {
        case "add":
            return[...prev, action.payload];
    }
};
const ReducerTodo = () => {
    const[state, dispatch] = useReducer(reducerFunc, initialState);
    console.log(state);

    //static data
    const newTodo ={
        text:"Hello World",
        id:1,
    };

  return (
    <div>
        <h1>ReducerTodo</h1>
        <button onClick={()=>dispatch({type:"add", payload:"newTodo"})}>
            Add Todo
        </button>
    </div>
  )
}

export default ReducerTodo;