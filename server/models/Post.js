const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const postSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	// description: {
	//   type: String,
	//   required: true
	// },
	price: {
		type: Number,
		required: true,
	},
	// location: {
	//   type: String,
	//   required: true
	// },
	// date: {
	//   type: Date,
	//   default: Date.now
	// }
});

const Post = model("Post", postSchema);

module.exports = Post;
