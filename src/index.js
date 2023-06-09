import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";
import companyLogo from "./images/market-logo.png";

import { Login, MessageForm, PostForm, Posts, Profile } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div id="nav">
        <header>
          <img src={companyLogo} />
          <h1>Stranger's Things</h1>
        </header>
        <nav>
          <Link to="/">Posts</Link>
          <Link id="profile" to="/profile">
            Profile
          </Link>
          <Link to="/login">Login</Link>
        </nav>
      </div>

      <div id="content">
        <Route path="/">
          <Posts />
        </Route>

        <Route path="/profile">
          <Profile />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/post_form">
          <PostForm />
        </Route>

        <Route path="/send_message">
          <MessageForm />
        </Route>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
