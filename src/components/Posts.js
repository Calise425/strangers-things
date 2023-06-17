import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { fetchPosts } from "../helper_files/apiCalls";

const Posts = ({ loggedIn, token, setId }) => {
  const [posts, setPosts] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetchPosts(setPosts);
  }, []);

  const handleClick = (postId) => {
    setId(postId);
    history.push("/send_message");
  };

  return (
    <div className="content">
      <div className="sub-nav">
        <Link to={loggedIn ? "/post_form" : "/login"}>
          {loggedIn ? "Create a New Post" : "Log in to create a post"}
        </Link>
        <div className="search">
          <input type="text" />
          <button>SEARCH</button>
        </div>
      </div>

      <div className="posts">
        {posts.map((post, index) => (
          <div key={index} className="post">
            <h2 className="post-title">
              {post.title} | {post.author.username}
            </h2>
            <p className="post-description">{post.description}</p>
            <h3 className="price">{post.price}</h3>
            {loggedIn ? (
              <button
                value={post._id}
                onClick={(e) => handleClick(e.target.value)}
              >
                Contact Seller
              </button>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
