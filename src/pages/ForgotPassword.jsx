import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ForgotPassword.css";
import logo from "../assets/logo.png";

function ForgotPassword() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleReset = (e) => {
    e.preventDefault();

    setError("");
    setMessage("");

    if (!email || !newPassword || !confirmPassword) {
      setError("Please fill all fields.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // frontend only
    setMessage("Password reset request submitted successfully.");

    console.log({
      email,
      newPassword,
    });
  };

  return (
    <div className="forgot-page">

      <div className="forgot-card">

        {/* LOGO */}
        <div className="forgot-header">

          <div className="logo-circle">
            <img
                src={logo}
                alt="Butterflies Academy Logo"
                className="logo-image"
            />
          </div>

          <h2 className="forgot-title">
            Reset Password
          </h2>

          <p className="forgot-subtitle">
            Butterflies Academy Management System
          </p>

        </div>

        <form onSubmit={handleReset}>

          {/* ERROR */}
          {error && (
            <div className="alert-box error-box">
              {error}
            </div>
          )}

          {/* SUCCESS */}
          {message && (
            <div className="alert-box success-box">
              {message}
            </div>
          )}

          {/* EMAIL */}
          <input
            type="email"
            placeholder="Enter your email"
            className="forgot-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* NEW PASSWORD */}
          <input
            type="password"
            placeholder="New Password"
            className="forgot-input"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />

          {/* CONFIRM PASSWORD */}
          <input
            type="password"
            placeholder="Confirm Password"
            className="forgot-input"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          {/* BUTTON */}
          <button
            type="submit"
            className="reset-btn"
          >
            Reset Password
          </button>

          {/* BACK */}
          <button
            type="button"
            className="back-btn"
            onClick={() => navigate("/")}
          >
            Back to Login
          </button>

        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;