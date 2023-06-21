import React from "react";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h2 className="login-text">Welcome to Stack-OverFlood</h2>
      <LoginForm />
    </div>
  );
};

export default Login;
