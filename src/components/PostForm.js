import React from "react";
import { makePost } from "../helper_files/apiCalls";

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
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, description, price, deliver);
    makePost(title, description, price, deliver, token);
  };

  return (
    <div className="form">
      <h2>Make a New Post</h2>
      <form onSubmit={handleSubmit}>
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
        <button>Create Post</button>
      </form>
    </div>
  );
};

export default PostForm;
