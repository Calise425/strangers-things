import React, { useState } from "react";

const MessageForm = () => {
  const fetchPost = async (id) => {
    try {
      const response = await fetch(
        `https://strangers-things.herokuapp.com/api/2303-ftb-et-web-pt/posts/${id}`
      );

      const result = await response.json();
      console.log(result);
      return result;
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="message-form">
      <form>
        <div className="post">
          <h2 className="post-title">
            {post.title} | {post.author.username}
          </h2>
          <p className="post-description">{post.description}</p>
          <h3 className="price">{post.price}</h3>
        </div>
        <label htmlFor="description"></label>
        <input type="text" id="description"></input>
      </form>
    </div>
  );
};

export default MessageForm;
