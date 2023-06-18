import React from "react";
import { Redirect } from "react-router-dom";

const Logout = ({ setToken, setLoggedIn, loggedIn }) => {
  const logout = () => {
    setToken("");
    setLoggedIn(false);
    console.log(loggedIn);
    localStorage.removeItem("token");
  };

  if (!loggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <div className="form">
      <p>Are you sure you want to log out?</p>
      <button onClick={logout}>Yes, Log Out</button>
    </div>
  );
};

export default Logout;
