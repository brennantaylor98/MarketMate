import React, { useState } from "react";
import "./createPost.css";
import { CREATE_POST } from "../utils/mutations";
import { useMutation } from "@apollo/client";

function CreatePost() {
	const [title, setTitle] = useState("");
	const [price, setPrice] = useState("");

	// const [createPost, { error, data }] = useMutation(CREATE_POST);

	// const handleSubmit = (event) => {
	// 	event.preventDefault();

	// 	const formData = new FormData();
	// 	formData.append("title", title);
	// 	formData.append("price", price);

	// 	fetch("/api/posts", {
	// 		method: "POST",
	// 		body: JSON.stringify(formData),
	// 	})
	// 		.then((response) => {
	// 			if (response.ok) {
	// 				console.log("Post created successfully");
	// 			} else {
	// 				console.error("Error creating post");
	// 			}
	// 		})
	// 		.catch((error) => {
	// 			console.error(error);
	// 		});
	// };

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await fetch("/api/posts", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ title, price }),
			});

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			const data = await response.json();
			console.log(data);
			window.location.replace('/')
		} catch (err) {
			console.log(err);
		}
	};

	// const handleSubmit = (event) => {
	// 	event.preventDefault();

	// 	createPost({ variables: { title, price } });

	// 	setTitle("");
	// 	setPrice("");
	// };

	return (
		<div className="container">
			<form className="form" onSubmit={handleSubmit}>
				<h2>Create a New Post</h2>
				<div className="form-group">
					<input
						type="text"
						className="form-control"
						id="title"
						placeholder="Title"
						value={title}
						onChange={(event) => setTitle(event.target.value)}
						required
					/>
				</div>
				{/* <div className="form-group">
          <textarea
            className="form-control"
            id="description"
            rows="5"
            placeholder='Description'
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            required
          ></textarea>
        </div> */}
				<div className="form-group">
					<input
						type="number"
						className="form-control"
						id="price"
						placeholder="Price"
						value={price}
						onChange={(event) => setPrice(event.target.value)}
						required
					/>
				</div>
				{/* <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="location"
            placeholder='Location'
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            required
          />
        </div> */}
				{/* <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="category"
            placeholder='Category'
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            required
          />
        </div> */}
				{/* <div className="form-group">
          <input
            type="file"
            className="form-control-file"
            id="image"
            onChange={(event) => setImage(event.target.files[0])}
            required
          />
        </div> */}
				<button type="submit" className="btn btn-primary">
					Create Post ✅
				</button>
			</form>
		</div>
	);
}

export default CreatePost;
