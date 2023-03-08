import React from "react";

import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";

import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CreatePost from "./pages/createPost";
import Clothing from "./pages/categories/clothing";
import Garden from "./pages/categories/garden";
import Electronics from "./pages/categories/electronics";
import Toys from "./pages/categories/toys";
import Pets from "./pages/categories/petsupplies";
import Kids from "./pages/categories/kids";
import Vehicles from "./pages/categories/vehicles";
import Health from "./pages/categories/health";
import Tickets from "./pages/categories/tickets";
import Hobbies from "./pages/categories/hobbies";
import Other from "./pages/categories/other";

const httpLink = createHttpLink({
	uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
	const token = localStorage.getItem("id_token");
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : "",
		},
	};
});

const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
});

// const PrivateRoute = ({ isAuthenticated, ...props }) => {
// 	return isAuthenticated ? <Route {...props} /> : <Navigate to="/login" />;
// };

function App() {
	return (
		<ApolloProvider client={client}>
			<Router>
				<div className="flex-column justify-flex-start min-100-vh">
					<Header />
					<div className="container min-100-vh">
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/login" element={<Login />} />
							<Route path="/signup" element={<Signup />} />
							<Route path="/me" element={<Profile />} />
							<Route path="/profiles/:username" element={<Profile />} />
							<Route path="CreatePost" element={<CreatePost />} />
							<Route path="/category/clothing" element={<Clothing />} />
							<Route path="/category/garden" element={<Garden />} />
							<Route path="/category/electronics" element={<Electronics />} />
							<Route path="/category/toys" element={<Toys />} />
							<Route path="/category/oet-supplies" element={<Pets />} />
							<Route path="/category/kids" element={<Kids />} />
							<Route path="/category/vehicles" element={<Vehicles />} />
							<Route path="/category/health" element={<Health />} />
							<Route path="/category/tickets" element={<Tickets />} />
							<Route path="/category/hobbies" element={<Hobbies />} />
							<Route path="/category/other" element={<Other />} />
						</Routes>
					</div>
					<Footer />
				</div>
			</Router>
		</ApolloProvider>
	);
}

export default App;
