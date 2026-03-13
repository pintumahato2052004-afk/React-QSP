const PropsChild2 = (props) => {
  console.log(props); // {values:{ data1:"", data2:[] ,data3:{} }}
  
  let { data1, data2, data3 } = props.values;

  return (
    <div>
      <h1>Props Child 2</h1>
      <h2>Data1 is {data1}</h2>
      <h2>Data2 is {data2}</h2>
      <h3>Data3 is {data3.firstname}</h3>
    </div>
  );
};

export default PropsChild2;
