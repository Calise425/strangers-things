import React, { useState } from "react";

const PostForm = ({ token }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [deliver, setDeliver] = useState(false);

  const makePost = async (title, description, price, deliver) => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, description, price, deliver);
    makePost(title, description, price, deliver);
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
