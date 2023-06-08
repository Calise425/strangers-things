import React, { useState, useEffect } from 'react';

const BASE_URL = `https://strangers-things.herokuapp.com/api/2303-ftb-et-web-pt`;

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`${BASE_URL}/posts`);
        const result = await response.json();
        setPosts(result.data.posts);
      } catch (err) {
        console.error(err);
      }
    };

    fetchPosts();
  }, []);

  console.log(posts);

  return (
    <section className="posts">
      {posts.map((post, index) => (
        <div key={index} className="post">
          <h2 className = "post-title"> {post.title} | {post.author.username}</h2>
          <p className = "post-description">Description: {post.description}</p>
          <h3 className = "price">{post.price}</h3>
        </div>
      ))}
    </section>
  );
};

export default Posts;
