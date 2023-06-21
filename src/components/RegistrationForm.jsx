import React, { useState } from "react";

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
    if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    if (Object.keys(errors).length === 0) {
      console.log("Registered");
    } else {
      setErrors(errors);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="name"
            value={firstName}
            placeholder="Enter your first name here"
            onChange={handleFirstNameChange}
            required
          />
          {errors.firstName && (
            <span className="error">{errors.firstName}</span>
          )}
        </label>
        <label>
          Last Name:
          <input
            type="name"
            value={lastName}
            placeholder="Enter your last name here"
            onChange={handleLastNameChange}
            required
          />
          {errors.lastName && <span className="error"> {errors.lastName}</span>}
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            placeholder="Enter your email here"
            onChange={handleEmailChange}
            required
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            placeholder="Enter your password here"
            onChange={handlePasswordChange}
            required
          />
          {errors.password && <span className="error"> {errors.password}</span>}
        </label>
        <label>
          Re-enter Password:
          <input
            type="password"
            value={confirmPassword}
            placeholder="Re-enter your password here"
            onChange={handleConfirmPasswordChange}
            required
          />
          {errors.confirmPassword && (
            <span className="error">{errors.confirmPassword}</span>
          )}
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};
export default RegistrationForm;
