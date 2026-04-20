import { configureStore, createSlice } from "@reduxjs/toolkit"
import {Provider} from "react-redux"
import Counter from "./Counter";

// ! step 2: create a slice
const counterSlice = createSlice({
    name: "counter",
    initialState: 0,
    reducers: {
        incre: (prevState, action) => {
            console.log(action); //{type: "counter/incre", payload: 10}
            return prevState + action.payload;
            
        },
        decre: (prevState, action) => {
            return prevState - 1;
        },
        reset: (prevState, action) => {
            return (prevState = 0);
        },
    },
});

export let {incre, decre, reset} = counterSlice.actions;

//!Step 1: create a store
const myStore = configureStore({
    reducer : {
        counter : counterSlice.reducer,
    },
});


const ReduxCounter = () => {
    return <Provider store={myStore}>
        <Counter/>
        </Provider>
}

export default ReduxCounter;