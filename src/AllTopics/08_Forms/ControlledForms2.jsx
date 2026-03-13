import { useState } from "react";

const ControlledForms2 = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    console.log(formData);

    // to get existing users from local storage, if users are present parse it else initialize with empty array []
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // create user data with id
    let userData = { ...formData, id: Math.random() };

    // add userData to users array
    users.push(userData);

    // set users array to local storage after converting into json
    localStorage.setItem("users", JSON.stringify(users));

    // clear input fields
    setFormData({username:"",email:"",password:""})
  };

  return (
    <div>
      <h1>Learn Controlled Forms</h1>
      <p>Manage multiple input with single state</p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Enter username"
          value={formData.username}
          onChange={handleChange}
        />

        <br />
        <br />

        <input
          type="text"
          name="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
        />

        <br />
        <br />

        <input
          type="text"
          name="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleChange}
        />

        <br />
        <br />

        <button>submit</button>
      </form>
    </div>
  );
};

export default ControlledForms2;
