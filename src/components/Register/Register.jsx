import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
// import { getCurrentSeason } from "../api/api";

import { getUser } from "../../api/api";

function Register(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [auth, setAuth] = useState("");
  const id = new Date();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const newUser = await axios
      .post("http://localhost:3000/users", {
        id,
        email: email,
        username: username,
        password: password,
      })
      .then((res) => {
        console.log("User created");
        setAuth(res.data);
        location.reload();
        // navigate(res.data ? "/login" : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="auth-form-container">
      <h2 className="login-title">Register</h2>
      <form
        className="login-form"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="name">Email: </label>
        <input
          required
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          placeholder="Email"
        />
        <label htmlFor="name">Username: </label>
        <input
          required
          value={username}
          name="username"
          onChange={(e) => setUsername(e.target.value)}
          id="username"
          placeholder="Username"
        />
        <label htmlFor="password">Password: </label>
        <input
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="******"
          id="password"
          name="password"
        />
        <button
          type="button"
          className="submit-btn"
          onClick={() => handleSubmit()}
        >
          Registrer
        </button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch("login")}>
        Already have an account? Login here.
      </button>
    </div>
  );
}

export default Register;
