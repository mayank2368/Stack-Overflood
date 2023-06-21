import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [captchaToken, setCaptchaToken] = useState(null);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};

    if (!email) {
      errors.email = "Email is required";
    }
    if (!password) {
      errors.password = "Password is required";
    }
    if (!captchaToken) {
      errors.captcha = "Please complete the reCAPTCHA verification";
    }

    if (Object.keys(errors).length === 0) {
      console.log("Login Confirmed");
    } else {
      setErrors(errors);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            placeholder="Enter email here"
            onChange={handleEmailChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            placeholder="Enter password here"
            onChange={handlePasswordChange}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </label>
        <ReCAPTCHA
          sitekey="6Ldi5LkmAAAAABWEe3zYROAOJxRW10IAzrvZFQwB"
          onChange={handleCaptchaChange}
        />
        {errors.captcha && <span className="error">{errors.captcha}</span>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
