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
			<div
				className="posts-container"
				style={{
					marginTop: "150px",
					height: "calc(100vh - 300px)",
					marginBottom: "150px",
					border: "2px solid black",
					overflowY: "scroll",
					width: "500px",
					maxWidth: "100%",
				}}
			>
				{posts.map((post) => (
					<div className="card" key={post._id}>
						<h2>{post.title}</h2>
						<p>Price: {post.price}</p>
					</div>
				))}
				{!posts && <h1>content and shit goes here </h1>}

				<Link to="/createPost" className="floating-button">
					Create <br />
					Post
				</Link>
			</div>
			{/* <div className="container mt-4">
				<h2>All Posts</h2>
				<ul className="list-group">
					{posts.map((post) => (
						<li key={post._id} className="list-group-item">
							<h4 className="text-black">{post.title}</h4>
							<p style={{ color: "black" }}>Price: {post.price}</p>
						</li>
					))}
				</ul>
			</div> */}
		</>
	);
};

export default Home;
