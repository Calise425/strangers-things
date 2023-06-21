import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import companyLogo from "./images/logo-transparent.png";
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
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [deliver, setDeliver] = useState(false);
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      setLoggedIn(true);
    }
  }, []);

  const setAndStoreToken = (token) => {
    localStorage.setItem("token", token);
    setToken(token);
  };

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
          <Posts loggedIn={loggedIn} token={token} setId={setId} />
        </Route>

        <Route path="/profile">
          <Profile
            token={token}
            setTitle={setTitle}
            setPrice={setPrice}
            setDeliver={setDeliver}
            setDescription={setDescription}
            setEdit={setEdit}
            setId={setId}
          />
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
            setToken={setAndStoreToken}
          />
        </Route>

        <Route path="/register">
          <Register
            username={username}
            password={password}
            token={token}
            setLoggedIn={setLoggedIn}
            setUsername={setUsername}
            setPassword={setPassword}
            setToken={setAndStoreToken}
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
          <PostForm
            token={token}
            title={title}
            setTitle={setTitle}
            description={description}
            setDescription={setDescription}
            price={price}
            setPrice={setPrice}
            deliver={deliver}
            setDeliver={setDeliver}
            edit={edit}
            setEdit={setEdit}
            id={id}
          />
        </Route>

        <Route path="/send_message">
          <MessageForm id={id} token={token} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
