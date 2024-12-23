import React, { useState } from "react";
import "./Login.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission (e.g., API call)
    console.log("Logging in with", username, password);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              id="username"
              placeholder="Username or Email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" formAction="Ethnic.jsx" className="login-button">
            Log In
          </button>
        </form>
        <div className="social-login">
          <p>Or login with</p>
          <div className="social-icons">
            <a href="https://google.com" className="google-icon">
              <i className="fab fa-google"></i>
            </a>
            <a href="https://facebook.com" className="facebook-icon">
              <i className="fab fa-facebook"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
