import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

const Posts = ({ loggedIn, token, setId }) => {
  const [posts, setPosts] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          `https://strangers-things.herokuapp.com/api/2303-ftb-et-web-pt/posts`
        );
        const result = await response.json();
        setPosts(result.data.posts);
        console.log(result);
      } catch (err) {
        console.error(err);
      }
    };

    fetchPosts();
  }, []);

  const handleClick = (postId) => {
    setId(postId);
    history.push("/send_message");
  };

  return (
    <section>
      <Link className="prompt" to={loggedIn ? "/post_form" : "/login"}>
        {loggedIn ? "Create a New Post" : "Log in to create a post"}
      </Link>
      <input type="text" />
      <div className="posts">
        {posts.map((post, index) => (
          <div key={index} className="post">
            <h2 className="post-title">
              {post.title} | {post.author.username}
            </h2>
            <p className="post-description">{post.description}</p>
            <h3 className="price">{post.price}</h3>
            <button
              value={post._id}
              onClick={(e) => handleClick(e.target.value)}
            >
              Contact Seller
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Posts;
