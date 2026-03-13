const ChildrenProps = () => {
  let user = ["Jane Doe", "John Doe", "James Doe"];
  return (
    <div>
      <h1>Learn Children Props</h1>
      {user.map((name, idx) => {
        return <Card key={idx}>{name}</Card>;
      })}
    </div>
  );
};

export default ChildrenProps;

const Card = (props) => {
  console.log(props); // {children "John Doe"}
  return (
    <div>
      <h1>I am Card</h1>
      <p>Welcome {props.children}</p>
    </div>
  );
};
