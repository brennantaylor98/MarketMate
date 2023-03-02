import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/createPosts')
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <>

<div className="posts-container" style={{ marginTop: '150px', height: 'calc(100vh - 300px)', marginBottom: '150px', border: '2px solid black', overflowY: 'scroll' }}>
        {posts.map((post) => (
          <div className="card" key={post.id}>
            <h2>{post.title}</h2>
            <p>Price: {post.price}</p>
          </div>
        ))}

        
<h1>content and shit goes here </h1>




      <Link to="/createPost" className="floating-button">
        Create <br />
        Post
      </Link>
      </div>
    </>
  );
};

export default Home;


