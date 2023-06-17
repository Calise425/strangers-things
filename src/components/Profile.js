import React, { useState, useEffect } from "react";
import { myData, deletePost } from "../helper_files/apiCalls";

const Profile = ({ token }) => {
  const [posts, setPosts] = useState([]);
  const [messages, setMessages] = useState([]);
  const [deleted, setDeleted] = useState(0);
  const [myId, setMyId] = useState("");
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

  useEffect(() => {
    myData(setPosts, setMessages, setMyId, token);
  }, [deleted]);

  const editHandler = () => {};

  return (
    <>
      <h2>Your Posts</h2>
      {posts.map((post, index) =>
        post.active ? (
          <div key={index} className="post">
            <h2 className="post-title">
              {post.title} | {post.author.username}
            </h2>
            <p className="post-description">{post.description}</p>
            <h3 className="price">{post.price}</h3>
            <button onClick={editHandler}>EDIT</button>
            <button
              id={`${post._id}`}
              onClick={() => deletePost(post._id, setDeleted, token)}
            >
              DELETE
            </button>
            <h3>Messages regarding this post: </h3>
            <div>
              {post.messages
                ? post.messages.map((message, index) => {
                    return (
                      <p key={index}>
                        From: {message.fromUser.username} Message:
                        {message.content}
                      </p>
                    );
                  })
                : null}
            </div>
          </div>
        ) : null
      )}
      <div id="message-container">
        <h2>Messages You've Sent</h2>
        {messages.map((message, index) => {
          return myId === message.fromUser._id ? (
            <div className="messages" key={index}>
              <h3>Post: {message.post.title}</h3>
              <p>Message: {message.content}</p>
            </div>
          ) : null;
        })}
      </div>
    </>
  );
};

export default Profile;
