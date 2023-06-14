import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passConfirm, setPassConfirm] = useState("");
  const [token, setToken] = useState("");

  const registerUser = async (name, pass) => {
    try {
      const response = await fetch(
        `https://strangers-things.herokuapp.com/api/2303-ftb-et-web-pt/users/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user: {
              username: `${name}`,
              password: `${pass}`,
            },
          }),
        }
      );
      const result = await response.json();
      console.log(result);
      localStorage.setItem("token", result.data.token);
      setToken(result.data.token);
      result.data.token ? setLoggedIn(true) : null;
      return result;
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(username, password);
  };

  return (
    <div className="login">
      <h2>Create an Account</h2>
      <p>
        Already a user? Click <Link to="/login">here</Link>
      </p>

      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input
          type="text"
          required
          value={username}
          placeholder="Enter your username"
          minLength="8"
          maxLength="20"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password:</label>
        <input
          type="password"
          required
          value={password}
          placeholder="Enter your password"
          minLength="8"
          maxLength="20"
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>Confirm Password:</label>
        <input
          type="password"
          required
          value={passConfirm}
          placeholder="Re-enter your password"
          minLength="8"
          maxLength="20"
          onChange={(e) => setPassConfirm(e.target.value)}
        />
        <button>Register</button>
        {password !== passConfirm ? <p>Passwords do not match</p> : null}
      </form>
    </div>
  );
};

export default Register;
