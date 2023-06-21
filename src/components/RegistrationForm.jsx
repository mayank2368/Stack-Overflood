import React, { useState } from "react";
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
        <h3>REGISTRATION FORM</h3>
        <div className="form-group">
          <label htmlFor="firstName" className="form-label">
            First Name:
          </label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            placeholder="Enter your first name here"
            onChange={handleFirstNameChange}
            className="form-input"
          />
          {errors.firstName && (
            <span className="error">{errors.firstName}</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="lastName" className="form-label">
            Last Name:
          </label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            placeholder="Enter your last name here"
            onChange={handleLastNameChange}
            className="form-input"
          />
          {errors.lastName && <span className="error">{errors.lastName}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            placeholder="Enter your email here"
            onChange={handleEmailChange}
            className="form-input"
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            placeholder="Enter your password here"
            onChange={handlePasswordChange}
            className="form-input"
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword" className="form-label">
            Re-enter Password:
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            placeholder="Re-enter your password here"
            onChange={handleConfirmPasswordChange}
            className="form-input"
          />
          {errors.confirmPassword && (
            <span className="error">{errors.confirmPassword}</span>
          )}
        </div>
        <button type="submit" className="form-button">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
