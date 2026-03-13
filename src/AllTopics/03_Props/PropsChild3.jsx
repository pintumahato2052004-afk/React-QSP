const PropsChild3 = (props) => {
  let { greet } = props;
  return (
    <div>
      <h1>Props Child 3</h1>

      <button onClick={() => greet("Parent")}>
        SEND DATA
      </button>
    </div>
  );
};

export default PropsChild3;
