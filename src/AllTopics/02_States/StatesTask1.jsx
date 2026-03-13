import { useState } from "react";

const StateTask1 = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <h1>States Task 1</h1>

      <button onClick={() => setToggle((prev) => !prev)}>
        {toggle ? "Hide" : "Show"}
      </button>

      {toggle && (
        <>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JS</li>
            <li>REACT.JS</li>
          </ul>
        </>
      )}
    </>
  );
};
export default StateTask1;
