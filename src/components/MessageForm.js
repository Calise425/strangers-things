import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { postMessage } from "../helper_files/apiCalls";

const MessageForm = ({ id, token }) => {
  const [message, setMessage] = useState("");
  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    postMessage(id);
    history.push("/");
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
    </div>
  );
};

export default MessageForm;
