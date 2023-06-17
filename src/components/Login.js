import React from "react";
import { Link, Redirect } from "react-router-dom";
import { login } from "../helper_files/apiCalls";

const Login = ({
  username,
  setUsername,
  password,
  setPassword,
  token,
  setToken,
  loggedIn,
  setLoggedIn,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password, setLoggedIn, setToken);
  };

  return loggedIn ? (
    <Redirect to="/" />
  ) : (
    <div className="form">
      <h2>Login</h2>
      <p>
        New User? Register <Link to="/register">here</Link>
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
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
