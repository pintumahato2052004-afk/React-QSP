const DrillingChild2 = ({ str, setData }) => {
  return (
    <div>
      <h1>Child 2 Component {str}</h1>

      <button onClick={() => setData("Hii Parent")}>
        send data
      </button>
    </div>
  );
};

export default DrillingChild2;
