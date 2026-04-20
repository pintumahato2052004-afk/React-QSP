import { useDispatch, useSelector } from "react-redux";
import { incre, decre, reset } from "./ReduxCounter";



const Counter = () => {

  // ! useSelector is used to access redux state. and return
  let count = useSelector((state) => {
    // console.log(state.counter);// 0
    return state.counter;
  });

  // ! returns dispatch function to call actions
  const dispatch = useDispatch();


  return (
    <div className="text-center p-5">
      <h1 className="text-4xl font-bold mb-5">Counter: {count} </h1>
      <button className="px-10 bg-green-400 me-3"
      onClick={()=> dispatch(incre(10))}
      >
        Increment
        </button>

        <button className="px-10 bg-green-400 me-3"
      onClick={()=> dispatch(decre())}
      >
        Decrement
        </button>

        <button className="px-10 bg-green-400 me-3"
      onClick={()=> dispatch(reset())}
      >
        Reset
        </button>


    </div>
  )
}

export default Counter;