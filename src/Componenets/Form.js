import "./form.css";
import { useState } from "react";

function Form() {
  const [info, setInfo] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(info);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>Login Form</h2>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={info.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={info.password}
          onChange={handleChange}
        />
        <input className="submit" type="submit" value="Log In" />
        <p>Forgot Password?</p>
      </form>
    </div>
  );
}

export default Form;
