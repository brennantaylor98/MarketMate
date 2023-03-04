const express = require("express");
const router = express.Router();
const { Post } = require("./models");

router.get("/api/posts", async (req, res) => {
	try {
		const posts = await Post.find();
		res.json(posts);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Server Error" });
	}
});

module.exports = router;
