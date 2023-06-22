import React, { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
import "../styles/RegistrationForm.css";

const RegistrationForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};
    if (!firstName) {
      errors.firstName = "First name is required";
    }
    if (!lastName) {
      errors.lastName = "Last name is required";
    }
    if (!email) {
      errors.email = "Email is required";
    }
    if (!password) {
      errors.password = "Password is required";
    }
    if (!confirmPassword) {
      errors.confirmPassword = "Repeat the password!";
    }
    if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    if (Object.keys(errors).length === 0) {
      console.log("Registered");
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, ...errors }));
    }
  };

  return (
    <div className="registration-form-container">
      <form onSubmit={handleSubmit} className="registration-form">
        <Typography variant="h5" component="h3" align="center">
          REGISTRATION FORM
        </Typography>
        <TextField
          type="text"
          label="First Name"
          value={firstName}
          placeholder="Enter your first name here"
          onChange={handleFirstNameChange}
          className="form-input"
          fullWidth
          error={Boolean(errors.firstName)}
          helperText={errors.firstName}
          margin="normal"
        />
        <TextField
          type="text"
          label="Last Name"
          value={lastName}
          placeholder="Enter your last name here"
          onChange={handleLastNameChange}
          className="form-input"
          fullWidth
          error={Boolean(errors.lastName)}
          helperText={errors.lastName}
          margin="normal"
        />
        <TextField
          type="email"
          label="Email"
          value={email}
          placeholder="Enter your email here"
          onChange={handleEmailChange}
          className="form-input"
          fullWidth
          error={Boolean(errors.email)}
          helperText={errors.email}
          margin="normal"
        />
        <TextField
          type="password"
          label="Password"
          value={password}
          placeholder="Enter your password here"
          onChange={handlePasswordChange}
          className="form-input"
          fullWidth
          error={Boolean(errors.password)}
          helperText={errors.password}
          margin="normal"
        />
        <TextField
          type="password"
          label="Confirm Password"
          value={confirmPassword}
          placeholder="Re-enter your password here"
          onChange={handleConfirmPasswordChange}
          className="form-input"
          fullWidth
          error={Boolean(errors.confirmPassword)}
          helperText={errors.confirmPassword}
          margin="normal"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="form-button"
        >
          Register
        </Button>
        <div className="form-login">
          Already have an account? <a href="/login">Login here!</a>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
