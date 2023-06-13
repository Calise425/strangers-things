import React, { useState } from "react";
import { Redirect } from "react-router-dom";

const Logout = ({ setToken, setLoggedIn, loggedIn }) => {
  const logout = () => {
    setToken("");
    setLoggedIn(false);
    console.log(loggedIn);
    localStorage.removeItem("token");
  };

  return (
    <>
      <p>Are you sure you want to log out?</p>
      <button onClick={logout}>Yes, Log Out</button>
      {!loggedIn ? <Redirect to="/" /> : null}
    </>
  );
};

export default Logout;
