import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const incre = () => {
    setCount((prev) => prev + 3);
  };
  const decre = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <>
      <h1>Counter : {count}</h1>
      <button onClick={incre}>incre</button>
      <button onClick={decre} disabled={count === 0 ? true : false}>
        decre
      </button>
      <button onClick={reset}>reset</button>
    </>
  );
};
export default Counter;
