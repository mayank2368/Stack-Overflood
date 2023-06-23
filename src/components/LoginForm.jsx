import React, { useState } from "react";
import {
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Typography,
} from "@mui/material";
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "react-router-dom";
import "../styles/LoginForm.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [captchaToken, setCaptchaToken] = useState(null);
  const [rememberMe, setRememberMe] = useState(false);

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

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
    <div className="login-form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <Typography variant="h5" component="h3" align="center">
          LOGIN FORM
        </Typography>
        <TextField
          type="email"
          label="Email"
          value={email}
          placeholder="Enter your email here"
          onChange={handleEmailChange}
          className="form-email"
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
          className="form-password"
          fullWidth
          error={Boolean(errors.password)}
          helperText={errors.password}
          margin="normal"
        />
        <div className="forgot-password">
          <Link to="/forgotpassword">Forgot password?</Link>
        </div>
        <ReCAPTCHA
          sitekey="6Ldi5LkmAAAAABWEe3zYROAOJxRW10IAzrvZFQwB"
          onChange={handleCaptchaChange}
        />
        {errors.captcha && <span className="error">{errors.captcha}</span>}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="form-button"
        >
          Login
        </Button>

        <FormControlLabel
          control={
            <Checkbox
              checked={rememberMe}
              onChange={handleRememberMeChange}
              color="primary"
            />
          }
          label="Remember me!"
          className="form-checkbox"
        />
        <div className="form-signup">
          Don't have an account? <Link to="/register">Sign up here!</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
