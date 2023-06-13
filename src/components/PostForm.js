import React, { useState } from "react";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [deliver, setDeliver] = useState(false);

  return (
    <div className="login">
      <h2>Make a New Post</h2>
      <form>
        <label>Title:</label>
        <input
          type="text"
          required
          value={title}
          placeholder="Enter a Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Description:</label>
        <input
          type="text"
          required
          value={description}
          placeholder="Enter Item Description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>Price:</label>
        <input
          type="number"
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
