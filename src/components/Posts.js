import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Posts = ({ loggedIn, token }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          `https://strangers-things.herokuapp.com/api/2303-ftb-et-web-pt/posts`
        );
        const result = await response.json();
        setPosts(result.data.posts);
      } catch (err) {
        console.error(err);
      }
    };

    fetchPosts();
  }, []);

  return (
    <section className="posts">
      <Link to={loggedIn ? "/post_form" : "/login"}>
        {loggedIn ? "Create a New Post" : "Log in to create a post"}
      </Link>
      {posts.map((post, index) => (
        <div key={index} className="post">
          <h2 className="post-title">
            {post.title} | {post.author.username}
          </h2>
          <p className="post-description">{post.description}</p>
          <h3 className="price">{post.price}</h3>
          <button>Contact Seller</button>
          {/* Button wasn't rendering need to fix this */}
          {post.isAuthor ? <button>EDIT</button> : null}
          {post.isAuthor ? <button>DELETE</button> : null}
        </div>
      ))}
    </section>
  );
};

export default Posts;
