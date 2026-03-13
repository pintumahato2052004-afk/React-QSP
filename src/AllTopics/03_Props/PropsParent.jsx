import { useState } from "react";
import PropsChild from "./PropsChild";
import PropsChild2 from "./PropsChild2";
import PropsChild3 from "./PropsChild3";

const PropsParent = () => {
  const [value, setValue] = useState("");

  let data1 = "Hello WOrld";
  let data2 = [10, 20, 30];
  let data3 = { firstname: "John" };

  function greet(val) {
    console.log("Welcome", val);
    setValue(`Welcome ${val}`);
  }

  return (
    <div>
      <h1>PropsParent : {value} </h1>

      <hr />

      {/* Sending multiple props */}
      <PropsChild value1={data1} value2={data2} value3={data3} />

      <hr />

      {/* Sending multiple data in single prop */}
      <PropsChild2 values={{ data1, data2, data3 }} />

      <hr />

      {/* Recieve data from Child to Parent */}
      <PropsChild3 greet={greet} />
    </div>
  );
};

export default PropsParent;
