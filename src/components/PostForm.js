import React, { useState } from "react";
import { makePost, updatePost } from "../helper_files/apiCalls";

const PostForm = ({
  token,
  setTitle,
  title,
  description,
  setDescription,
  price,
  setPrice,
  deliver,
  setDeliver,
  edit,
  id,
}) => {
  const [success, setSuccess] = useState(undefined);

  const handleSubmit = (e) => {
    e.preventDefault();
    makePost(title, description, price, deliver, token, setSuccess);
    setTitle("");
    setDeliver(false);
    setPrice("");
    setDescription("");
  };

  const editPost = (e) => {
    e.preventDefault();
    updatePost(id, token, title, description, price, deliver, setSuccess);
    setTitle("");
    setDeliver(false);
    setPrice("");
    setDescription("");
    setEdit(false);
  };

  return (
    <div className="form">
      {edit ? <h2>Edit Your Posting </h2> : <h2>Make a New Post</h2>}
      <form id="post-form" onSubmit={edit ? editPost : handleSubmit}>
        <label>Title: </label>
        <input
          type="text"
          required
          value={title}
          placeholder="Enter a Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Description: </label>
        <input
          type="text"
          required
          value={description}
          placeholder="Enter Item Description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>Price: </label>
        <input
          type="text"
          required
          value={price}
          placeholder="Enter Item Price"
          onChange={(e) => setPrice(e.target.value)}
        />
        <div>
          <input
            type="checkbox"
            id="deliveryCheckbox"
            checked={deliver}
            onChange={() => setDeliver(!deliver)}
          />
          <label htmlFor="deliveryCheckbox">Willing to Deliver?</label>
        </div>
        {edit ? <button>Update Post</button> : <button>Create Post</button>}
      </form>
      {success ? (
        edit ? (
          <div id="alert">
            <h2>Success!</h2>
            <p>Your post has been updated</p>
          </div>
        ) : (
          <div id="alert">
            <h2>Success!</h2>
            <p>Your post has been created</p>
          </div>
        )
      ) : null}
    </div>
  );
};

export default PostForm;
