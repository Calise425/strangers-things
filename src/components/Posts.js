import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { fetchPosts } from "../helper_files/apiCalls";

const Posts = ({ loggedIn, setId }) => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetchPosts(setPosts);
  }, []);

  const handleClick = (postId) => {
    setId(postId);
    history.push("/send_message");
  };

  const filterPosts = () => {
    const filtered = posts.filter((post) => {
      const lowerCaseQuery = searchTerm.toLowerCase();
      return (
        post.title.toLowerCase().includes(lowerCaseQuery) ||
        post.description.toLowerCase().includes(lowerCaseQuery) ||
        post.author.username.toLowerCase().includes(lowerCaseQuery)
      );
    });
    setFilteredPosts(filtered);
  };

  const postsToDisplay = searchTerm.length ? filteredPosts : posts;

  return (
    <div className="content">
      <div className="sub-nav">
        <Link to={loggedIn ? "/post_form" : "/login"}>
          {loggedIn ? "Create a New Post" : "Log in to create a post"}
        </Link>
        <div className="search">
          <input
            id="search"
            type="text"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              filterPosts();
            }}
          />
          <button>SEARCH</button>
        </div>
      </div>

      <div className="posts">
        {postsToDisplay.map((post, index) => (
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
