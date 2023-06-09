import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import companyLogo from "./images/market-logo.png";
import { Login, Register, MessageForm, PostForm, Posts, Profile } from "./components";

const App = () => {
  const [loggedIn, setLoggedIn] = useState('false');

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

      <Switch>
        <Route exact path="/" component = {Posts}/>
        <Route path="/profile" component = {Profile}/>
        <Route path="/login" component = {Login}/>
        <Route path="/post_form" component = {PostForm}/>
        <Route path="/send_message" component = {MessageForm}/>
        <Route path="/register" component = {Register}/>
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
