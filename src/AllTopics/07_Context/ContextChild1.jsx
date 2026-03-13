import ContextChild2 from "./ContextChild2";

const ContextChild1 = () => {
  return (
    <div>
      <h1>Child 1 Component</h1>

      <ContextChild2 />
    </div>
  );
};

export default ContextChild1;
