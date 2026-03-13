import { useState } from "react";

const ControlledForms1 = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [message, setMessage] = useState("");

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleForm = (e) => {
    e.preventDefault(); // stops page reload
    console.log("form submitted");

    let data = { fullname: { firstname, lastname } };
    console.log(data);

    setMessage(`Welcome ${firstname} ${lastname}`);

    // clearing input fields
    setFirstName("");
    setLastName("");
  };

  return (
    <div>
      <h1>Learn Controlled Forms 1</h1>

      <form onSubmit={handleForm}>
        <label htmlFor="firstname">First Name : </label>
        <input
          type="text"
          id="firstname"
          value={firstname}
          onChange={handleFirstName}
        />

        <br />
        <br />

        <label htmlFor="lastname">Last Name : </label>
        <input
          type="text"
          id="lastname"
          value={lastname}
          onChange={handleLastName}
        />

        <br />
        <br />

        <button>Submit</button>
      </form>

      {message && <h2>{message}</h2>}
    </div>
  );
};

export default ControlledForms1;
