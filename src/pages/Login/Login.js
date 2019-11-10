import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Login() {

	const history = useHistory();

	const [loginData, setLoginData] = useState({
		login: '',
		password: ''
	});

	const handleInputChange = event => {
		const { value, name } = event.target;
		setLoginData({
			...loginData,
		  [name]: value
		});
	}

	const onSubmit = event => {
		event.preventDefault();
		console.log(loginData);
		fetch('http://localhost:3000/admin/login', {
			method: 'POST',
			body: JSON.stringify(loginData),
			headers: {
			  'Content-Type': 'application/json'
			}
		  })
		  .then(res => {
			  console.log('res', res)
			if (res.status === 200) {
			  history.push('/secret');
			} else {
			  const error = new Error(res.error);
			  throw error;
			}
		  })
		  .catch(err => {
			console.error(err);
			alert('Error logging in please try again');
		  });
	}

	return (
		<form onSubmit={onSubmit}>
			<h1>Login!</h1>
			<input
			type="text"
			name="login"
			placeholder="Enter login"
			value={loginData.login}
			onChange={handleInputChange}
			required
			/>
			<input
			type="password"
			name="password"
			placeholder="Enter password"
			value={loginData.password}
			onChange={handleInputChange}
			required
			/>
		<input type="submit" value="Submit"/>
      </form>
	);
}

export default Login;