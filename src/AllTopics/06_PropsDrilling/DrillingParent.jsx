import { useState } from "react";
import DrillingChild1 from "./DrillingChild1";

const DrillingParent = () => {
  const [data, setData] = useState("");
  let str = "Hello Nested Child";

  return (
    <div>
      <h1>Learn Props Drilling {data} </h1>

      <DrillingChild1 str={str} setData={setData} />
    </div>
  );
};

export default DrillingParent;
