import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import companyLogo from "./images/market-logo.png";
import {
  Login,
  Register,
  Logout,
  MessageForm,
  PostForm,
  Posts,
  Profile,
} from "./components";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(undefined);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  useEffect(() => {
    token || localStorage.token ? setLoggedIn(true) : setLoggedIn(false);
  }, []);

  return (
    <BrowserRouter>
      <div id="nav">
        <header>
          <img src={companyLogo} />
          <h1>Stranger's Things</h1>
        </header>
        <nav>
          <Link to="/">Posts</Link>
          <Link to={loggedIn ? "/profile" : "/"}>
            {loggedIn ? "Profile" : null}
          </Link>
          <Link to={loggedIn ? "/logout" : "/login"}>
            {loggedIn ? "Logout" : "Login"}
          </Link>
        </nav>
      </div>

      <Switch>
        <Route exact path="/">
          <Posts loggedIn={loggedIn} token={token} />
        </Route>

        <Route path="/profile">
          <Profile token={token} />
        </Route>

        <Route path="/login">
          <Login
            username={username}
            password={password}
            token={token}
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
            setUsername={setUsername}
            setPassword={setPassword}
            setToken={setToken}
          />
        </Route>

        <Route path="/register">
          <Register
            username={username}
            password={password}
            token={token}
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
            setUsername={setUsername}
            setPassword={setPassword}
            setToken={setToken}
          />
        </Route>

        <Route path="/logout">
          <Logout
            setLoggedIn={setLoggedIn}
            setToken={setToken}
            loggedIn={loggedIn}
          />
        </Route>

        <Route path="/post_form">
          <PostForm token={token} />
        </Route>

        <Route path="/send_message">
          <MessageForm />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
