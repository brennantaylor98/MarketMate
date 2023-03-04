const { gql } = require("apollo-server-express");
const { GraphQLScalarType } = require("graphql");

const NumberScalar = new GraphQLScalarType({
	name: "Number",
	serialize(value) {
		if (typeof value !== "number") {
			throw new Error("Value must be a number");
		}
		return value;
	},
	parseValue(value) {
		if (typeof value !== "number") {
			throw new Error("Value must be a number");
		}
		return value;
	},
});

module.exports = NumberScalar;

const typeDefs = gql`
	scalar Number
	type Post {
		_id: ID!
		title: String!
		price: Number!
	}

	type User {
		_id: ID
		username: String
		email: String
		password: String
	}

	type Auth {
		token: ID!
		user: User
	}

	type Query {
		getPosts: [Post]!
		me: User
	}

	type Mutation {
		createPost(title: String!, price: Number!): Post!
		addUser(username: String!, email: String!, password: String!): Auth
		login(email: String!, password: String!): Auth
	}
`;

module.exports = typeDefs;
