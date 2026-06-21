import React, { useState } from "react";
import "../styles/Login.css";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  

  const [error, setError] = useState("");

  // fake users (for UI testing only)
  const fakeUsers = {
    admin: { username: "admin", password: "1234" },
    teacher: { username: "teacher", password: "1234" },
  };

 const handleLogin = (e) => {
  e.preventDefault();
  setError("");

  // Validation
  if (!username || !password || !role) {
    setError("Please fill all fields and select a role.");
    return;
  }

  // Safety check (prevents crash)
  if (!fakeUsers[role]) {
    setError("Invalid role selected.");
    return;
  }

  // Authentication
  if (
    username !== fakeUsers[role].username ||
    password !== fakeUsers[role].password
  ) {
    setError("Invalid username or password.");
    return;
  }

  console.log("Login successful!", { username, role, rememberMe });

  // Navigation
  if (role === "admin") {
  navigate("/AdminDashboard");
} else if (role === "teacher") {
  navigate("/TeacherDashboard");
}
};


  return (
    <div className="login-page">
      <div className="login-card">

        <div className="text-center mb-4">

          <div className="logo-circle">
            <img
            src={logo}
            alt="Butterflies Academy Logo"
            className="logo-image"
            />
</div>

          <h2 className="login-title">
            Butterflies Academy
          </h2>

          <p className="login-subtitle">
            Nursery Management System
          </p>

        </div>

        <form onSubmit={handleLogin}>

          {/* ERROR MESSAGE */}
          {error && (
            <div className="alert alert-danger text-center">
              {error}
            </div>
          )}
          
          <input
            type="text"
            placeholder="Username"
            className="form-control mb-3 w-100"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          
          <input
            type="password"
            placeholder="Password"
            className="form-control mb-3 w-100"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* ROLE BUTTONS */}
        <div className="role-buttons">
          <button
            type="button"
            className={role === "admin" ? "role-btn active" : "role-btn"}
            onClick={() => setRole("admin")}
          >
            Admin
          </button>

          <button
            type="button"
            className={role === "teacher" ? "role-btn active" : "role-btn"}
            onClick={() => setRole("teacher")}
          >
            Teacher
          </button>
        </div>

          {/* REMEMBER ME */}
        <div className="remember-container">
          <input type="checkbox" id="remember" className="me-2" />
          <label htmlFor="remember">Remember me</label>
        </div>

          {/* FORGOT PASSWORD */}
          <div className="forgot-password">
            <button
              type="button"
              onClick={() => navigate("/ForgotPassword")}
            >
            Forgot Password?
            </button>
          </div>

         <button type="submit" className="login-btn">
            Login
         </button>
        </form>
      </div>
    </div>
  );
}

export default Login;