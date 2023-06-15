import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

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
  const login = async (name, pass) => {
    try {
      const response = await fetch(
        `https://strangers-things.herokuapp.com/api/2303-ftb-et-web-pt/users/login`,
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
      result.data.token ? setLoggedIn(true) : null;
      localStorage.setItem("token", token);
      setToken(result.data.token);
      return result;
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  return loggedIn ? (
    <Redirect to="/" />
  ) : (
    <div id="form">
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
