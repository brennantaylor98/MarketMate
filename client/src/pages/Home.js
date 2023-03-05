import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
		<>
	<div className="catagoryText">
		<h1> Catagories:</h1>
		<Link to="/category/clothing" style={{ color: "black"  }}>
                Clothing
              </Link>| 
			  <Link to="/category/garden" style={{ color: "black" }}>
                Garden
              </Link>| 
			  <Link to="/category/electronics" style={{ color: "black" }}>
                Electronics
              </Link>|
			  <Link to="/category/toys" style={{ color: "black" }}>
                Toys
              </Link>|
			  <Link to="/category/pet-supplies" style={{ color: "black" }}>
                Pet Supplies
              </Link>|
			  <Link to="/category/kids" style={{ color: "black" }}>
                Kids
              </Link>|
			  <Link to="/category/vehicles" style={{ color: "black" }}>
                Vehicles
              </Link>|
			  <Link to="/category/health" style={{ color: "black" }}>
                Health
              </Link>|
			  <Link to="/category/tickets" style={{ color: "black" }}>
                Tickets
              </Link>|
			  <Link to="/category/hobbies" style={{ color: "black" }}>
                Hobbies
              </Link>|
			  <Link to="/category/other" style={{ color: "black" }}>
                Other
              </Link>


			<div
			
				className="posts-container"
				style={{
					marginTop: "25px",
					height: "calc(100vh - 300px)",
					marginBottom: "150px",
					border: "0px solid black",
					overflowY: "scroll",
					width: "1500px",
					maxWidth: "100%",
				}}
			>
				{posts.map((post) => (
					<div className="card" key={post._id}>
						<h2>{post.title}</h2>
						<p>Price: {post.price}</p>
					</div>
				))}
				{!posts && <h1>content</h1>}

				<Link to="/createPost" className="floating-button">
					Create <br />
					Post
				</Link>
			</div>
		</div>
		</>
	);
};

export default Home;