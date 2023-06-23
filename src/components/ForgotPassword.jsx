import React, { useState } from "react";
import { Typography, TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "../styles/ForgotPassword.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setErrors("Please enter the email!");
    } else {
      setErrors("");
      setSuccessMessage("Password reset email sent. Please check your inbox");
    }
  };

  return (
    <div className="forgot-password-container">
      <form className="forgot-password-form" onSubmit={handleSubmit}>
        <TextField
          type="email"
          label="Forgot your account’s password? Enter your email address and we’ll send you a recovery link."
          value={email}
          placeholder="Please enter your email here"
          onChange={handleEmailChange}
          fullWidth
        />
        {successMessage ? (
          <Typography variant="body1" className="success-message">
            {successMessage}
          </Typography>
        ) : (
          <>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="form-button"
            >
              Send recovery email
            </Button>
            {errors && (
              <Typography className="error-message">{errors}</Typography>
            )}
          </>
        )}
        <div className="form-login">
          Remembered your password? <Link to="/login">Login here!</Link>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
