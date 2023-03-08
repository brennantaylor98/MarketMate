import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/api/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => {
        console.error("There was an error fetching posts:", error);
      });
    console.log("posts", posts);
  }, []);

  return (
    <div className="catagoryText">
		<div className="linksList">
			<Link to="/category/clothing" className="link">
			Clothing
			</Link>
			|
			<Link to="/category/garden" className="link">
			Garden
			</Link>
			|
			<Link to="/category/electronics" className="link">
			Electronics
			</Link>
			|
			<Link to="/category/toys" className="link">
			Toys
			</Link>
			|
			
			<Link to="/category/pet-supplies" className="link">
			Pet
			</Link>
			| <br></br>
			<Link to="/category/kids" className="link">
			Kids
			</Link>
			|
			<Link to="/category/vehicles" className="link">
			Vehicles
			</Link>
			|
			<Link to="/category/health" className="link">
			Health
			</Link>
			|
			<Link to="/category/tickets" className="link">
			Tickets
			</Link>
			|
			<Link to="/category/hobbies" className="link">
			Hobbies
			</Link>
			|                
			<Link to="/category/other" className="link">
			Other
			</Link>
		</div>
        <div className="posts-container">
          {posts.map((post) => (
            <div className="card postsCard" key={post._id}>
				<div>
              		<h2 className="postTitle">{post.title}</h2>
              		<p className="postPrice">Price: {post.price}</p>
				</div>
				<div>
					<button className="favoriteBtn">✩</button>
				</div>
            </div>
          ))}
          {!posts && <h1>content</h1>}

          <Link to="/createPost" className="floating-button">
            Create <br />
            Post
          </Link>
        </div>
    </div>
  );
};

export default Home;

