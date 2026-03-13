import { useState } from "react";
import UpliftingChildA from "./UpliftingChildA";
import UpliftingChildB from "./UpliftingChildB";

const UpliftingParent = () => {
  const [count, setCount] = useState(0);
  
  const handleIncrement = () => setCount((prev) => prev + 1);

  return (
    <div>
      <h1>Example of State-Uplifting</h1>
      <hr />
      <UpliftingChildA count={count} />
      <hr />
      <UpliftingChildB handleIncrement={handleIncrement} />
    </div>
  );
};

export default UpliftingParent;
