const { AuthenticationError } = require("apollo-server-express");
const { User, Post } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
	Query: {
		getPosts: async () => {
			const posts = await Post.find();
			return posts;
		},

		me: async (parent, args, context) => {
			if (context.user) {
				const userData = await User.findOne({ _id: context.user._id }).select(
					"-__v -password"
				);
				return userData;
			}
			throw new AuthenticationError("Not logged in");
		},
	},

	Mutation: {
		createPost: async (parent, { title, price }, { Post }) => {
			const newPost = new Post({ title, price });
			await newPost.save();
			return newPost;
		},

		addUser: async (parent, { username, email, password }) => {
			const user = await User.create({ username, email, password });
			const token = signToken(user);
			return { token, user };
		},
		login: async (parent, { email, password }) => {
			const user = await User.findOne({ email });

			if (!user) {
				throw new AuthenticationError("No user found with this email address");
			}

			const correctPw = await user.isCorrectPassword(password);

			if (!correctPw) {
				throw new AuthenticationError("wrong");
			}

			const token = signToken(user);

			return { token, user };
		},
	},
};

module.exports = resolvers;
