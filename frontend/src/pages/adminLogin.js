import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLoginAction } from "../actions/userAction";
import Loading from "../components/Loader";
function Admin() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const userLogin = useSelector((state) => state.userLogin);
	const { loading, error, userInfo } = userLogin;
	const dispatch = useDispatch();
	const clickHandler = (e) => {
		e.preventDefault();
		if (email && password) {
			dispatch(userLoginAction(email,password));
			console.log(email);
		}
	};
	return (
		<>
			<div className='loginContainer'>
				<div className='loginForm'>
					<h1>Admin Login</h1>
					<form action='' onSubmit={clickHandler}>
						<div className='form-control'>
							<input
								type='email'
								placeholder='enter email'
								name='email'
								id='email'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
							/>
						</div>
						<div className='form-control'>
							<input
								type='password'
								placeholder='enter password'
								name='password'
								id='password'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
							/>
						</div>
						<button type='submit' className='btn login'>
							Sign in
						</button>
					</form>
				</div>
			</div>
		</>
	);
}

export default Admin;
