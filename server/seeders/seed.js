const db = require("../config/connection");
const { User, Post } = require("../models");
const userSeeds = require("./userSeeds.json");
const userPosts = require("./userPosts.json");

db.once("open", async () => {
	try {
		await User.deleteMany({});

		await User.create(userSeeds);

		for (let i = 0; i < userPosts.length; i++) {}
	} catch (err) {
		console.error(err);
		process.exit(1);
	}

	console.log("all done!");
	process.exit(0);
});
