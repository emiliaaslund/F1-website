import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    const user = {
      email,
      username,
      password,
    };

    const response = axios
      .post("http://localhost:3000/login", user)
      .then((res) => {
        const result = axios
          .get(`http://localhost:3000/users/`)
          .then((result) => {
            sessionStorage.setItem("user", JSON.stringify(res.data));
            navigate(result.data.email === res.email ? "/profile" : "/login");
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="auth-form-container">
      <h2 className="login-title">Login</h2>
      <form
        className="login-form"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label className="name">Email* </label>
        <input
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          placeholder="Email"
          required
        />
        <label className="password">Password*</label>
        <input
          required
          type="password"
          className="form-control"
          id="password"
          placeholder="******"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button
          type="submit"
          className="submit-btn"
          onClick={() => handleSubmit()}
        >
          Log In
        </button>
      </form>
      <div>
        <button
          className="link-btn"
          onClick={() => props.onFormSwitch("register")}
        >
          Don't have an account? Register here.
        </button>
      </div>
    </div>
  );
};

export default Login;
