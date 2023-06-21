import React, { useState } from "react";
import { postMessage } from "../helper_files/apiCalls";

const MessageForm = ({ id, token }) => {
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    postMessage(id, token, message, setSuccess);
  };

  return (
    <div className="message-form">
      <h2>Enter your message here:</h2>
      <form onSubmit={submitHandler}>
        <textarea
          id="message-input"
          rows="4"
          cols="30"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        ></textarea>
        <button>Send Message</button>
      </form>
      {success ? <h2>Message sent!</h2> : null}
    </div>
  );
};

export default MessageForm;
