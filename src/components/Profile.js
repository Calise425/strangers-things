import React, { useState, useEffect } from "react";
import { deletePost } from "../helper_files/apiCalls";
import { useHistory } from "react-router-dom";

const Profile = ({
  setTitle,
  setDescription,
  setPrice,
  setDeliver,
  setEdit,
  setId,
}) => {
  const [posts, setPosts] = useState([]);
  const [messages, setMessages] = useState([]);
  const [deleted, setDeleted] = useState(0);
  const [myId, setMyId] = useState("");
  const history = useHistory();
  const token = localStorage.getItem("token");

  //I was able to pull out the other API calls but for some reason this one was not working properly so it stays...
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
      console.log(token);
      console.log(result);
      setPosts(result.data.posts);
      setMessages(result.data.messages);
      setMyId(result.data._id);
      return result;
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    myData(setPosts, setMessages, setMyId, token);
  }, [deleted]);

  const editHandler = (post) => {
    setTitle(post.title);
    setDescription(post.description);
    setPrice(post.price);
    setDeliver(post.willDeliver);
    setEdit(true);
    setId(post._id);
    history.push("/post_form");
  };

  return (
    <div>
      <h2>Your Posts</h2>
      {posts.map((post, index) =>
        post.active ? (
          <div key={index} className="post">
            <h3 className="post-title">{post.title}</h3>
            <p className="post-description">{post.description}</p>
            <h4 className="price">{post.price}</h4>
            <button onClick={() => editHandler(post)}>EDIT</button>
            <button
              id={`${post._id}`}
              onClick={() => deletePost(post._id, setDeleted, deleted, token)}
            >
              DELETE
            </button>
            <h3>Messages regarding this post: </h3>
            <div>
              {post.messages
                ? post.messages.map((message, index) => {
                    return (
                      <p className="message" key={index}>
                        From: {message.fromUser.username} :{message.content}
                      </p>
                    );
                  })
                : null}
            </div>
          </div>
        ) : null
      )}
      <div>
        <h2>Messages You've Sent</h2>
        {messages.map((message, index) => {
          return myId === message.fromUser._id ? (
            <div className="messages" key={index}>
              <h3>Post: {message.post.title}</h3>
              <p>You: {message.content}</p>
            </div>
          ) : null;
        })}
      </div>
    </div>
  );
};

export default Profile;
