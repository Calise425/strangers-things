import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const MessageForm = ({ id, token }) => {
  const [message, setMessage] = useState("");
  const history = useHistory();
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

  const submitHandler = (e) => {
    e.preventDefault();
    postMessage(id);
    history.push("/");
  };

  return (
    <div className="message-form">
      <h2>Enter your message here:</h2>
      <form onSubmit={submitHandler}>
        <input
          id="message-input"
          type="text"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        ></input>
        <button>Send Message</button>
      </form>
    </div>
  );
};

export default MessageForm;
