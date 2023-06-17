const postMessage = async (id) => {
  try {
    const response = await fetch(
      `https://strangers-things.herokuapp.com/api/2303-ftb-et-web-pt/posts/${id}/messages`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          message: {
            content: `${message}`,
          },
        }),
      }
    );
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};

const deletePost = async (id, setDeleted, deleted, token) => {
  try {
    const response = await fetch(
      `https://strangers-things.herokuapp.com/api/2303-ftb-et-web-pt/posts/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const result = await response.json();
    result.success ? setDeleted(deleted + 1) : null;
    return result;
  } catch (err) {
    console.error(err);
  }
};

const myData = async (setPosts, setMessages, setMyId, token) => {
  try {
    const response = await fetch(
      `https://strangers-things.herokuapp.com/api/2303-ftb-et-web-pt/users/me`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const result = await response.json();
    setPosts(result.data.posts);
    setMessages(result.data.messages);
    setMyId(result.data._id);
    return result;
  } catch (err) {
    console.error(err);
  }
};

const fetchPosts = async (setPosts) => {
  try {
    const response = await fetch(
      `https://strangers-things.herokuapp.com/api/2303-ftb-et-web-pt/posts`
    );
    const result = await response.json();
    setPosts(result.data.posts);
    console.log(result);
  } catch (err) {
    console.error(err);
  }
};

const login = async (name, pass, setLoggedIn, setToken) => {
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
    setToken(result.data.token);
    return result;
  } catch (err) {
    console.error(err);
  }
};

const makePost = async (title, description, price, deliver, token) => {
  try {
    const response = await fetch(
      `https://strangers-things.herokuapp.com/api/2303-ftb-et-web-pt/posts`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          post: {
            title: `${title}`,
            description: `${description}`,
            price: `${price}`,
            willDeliver: deliver,
          },
        }),
      }
    );
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};

const updatePost = async (
  id,
  token,
  title,
  description,
  price,
  willDeliver,
  setSuccess
) => {
  try {
    const response = await fetch(
      `https://strangers-things.herokuapp.com/api/2303-ftb-et-web-pt/posts/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          post: {
            title: title,
            description: description,
            price: price,
            location: "on Request",
            willDeliver: willDeliver,
          },
        }),
      }
    );
    const result = await response.json();
    console.log(result);
    result.success ? setSuccess(true) : setSuccess(false);
    return result;
  } catch (err) {
    console.error(err);
  }
};

export {
  postMessage,
  deletePost,
  myData,
  fetchPosts,
  login,
  makePost,
  updatePost,
};
