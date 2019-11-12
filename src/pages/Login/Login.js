import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = ({ fetchLogin, loginSuccess }) => {
  const history = useHistory();

  const [loginData, setLoginData] = useState({
    login: "",
    password: ""
  });

  const handleInputChange = event => {
    const { value, name } = event.target;
    setLoginData({
      ...loginData,
      [name]: value
    });
  };

  const onSubmit = event => {
    event.preventDefault();
    fetchLogin(loginData);
  };

  if (loginSuccess) {
    history.push("/profiles");
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
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Login;
