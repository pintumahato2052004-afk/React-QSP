const PropsChild = (props) => {
  console.log(props);

  let { value1, value2, value3 } = props;

  return (
    <div>
      <h1>PropsChild </h1>
      <h2>Value 1 is {value1}</h2>
      <h2>Value 2 is {value2}</h2>
      <h2>Value 3 is {value3.firstname}</h2>
    </div>
  );
};

export default PropsChild;
