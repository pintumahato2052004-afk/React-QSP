import { useState } from "react";

const StatesInFBC = () => {
  console.log("component rendered");

  const [data, setData] = useState("Hello Everyone 🩷"); // [ud , f]
  const [cart, setCart] = useState("Add to cart");

  const handleBtn = () => {
    setData("Byee Everyone 👋");
  };

  const handleCartBtn = () => {
    setCart("Go to cart");
  };

  return (
    <>
      <h1>Learn States in Function Based</h1>
      <h2>{data}</h2>
      <button onClick={handleBtn}>update</button>
      <hr />
      <button onClick={handleCartBtn}> {cart} </button>
    </>
  );
};
export default StatesInFBC;
