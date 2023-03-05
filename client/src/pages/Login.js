import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";

import Auth from "../utils/auth";

const Login = (props) => {
	const [formState, setFormState] = useState({ email: "", password: "" });
	const [login, { error, data }] = useMutation(LOGIN_USER);

	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormState({
			...formState,
			[name]: value,
		});
	};

	const handleFormSubmit = async (event) => {
		event.preventDefault();
		console.log(formState);
		try {
			const { data } = await login({
				variables: { ...formState },
			});

			Auth.login(data.login.token);
		} catch (e) {
			console.error(e);
		}

		setFormState({
			email: "",
			password: "",
		});
	};

	return (
		<div
			className="d-flex justify-content-center align-items-center"
			style={{ display: "flex", alignItems: "center" }}
		>
			<div className="card">
				<h4 className="card-header bg-black text-light p-2">Login</h4>
				<div className="card-body">
					{data ? (
						<p>
							Success! You may now head{" "}
							<Link to="/">back to the homepage.</Link>
						</p>
					) : (
						<form onSubmit={handleFormSubmit}>
							<input
								className="form-input"
								placeholder="Seller@gmail.com"
								name="email"
								type="email"
								value={formState.email}
								onChange={handleChange}
							/>
							<input
								className="form-input"
								placeholder="******"
								name="password"
								type="password"
								value={formState.password}
								onChange={handleChange}
							/>
							<button
								className="btn btn-block bg-white text-black"
								style={{ cursor: "pointer" }}
								type="submit"
							>
								Login
							</button>
							<div className="mt-3 text-center">
								<span>
									Don't have an account? <br></br>{" "}
								</span>
								<Link
									to="/signup"
									className="btn btn-link"
									style={{ color: "white", backgroundColor: "black" }}
								>
									Register
								</Link>
							</div>
						</form>
					)}

					{error && (
						<div className="my-3 p-3 bg-danger text-white">{error.message}</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Login;
