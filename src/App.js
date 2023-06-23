import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Navbar from "./components/Navbar";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";

function App() {
  return (
    <div className="App">
      <Router>
        <nav className="navbar">
          <Navbar />
        </nav>
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Registration />} />
          <Route path="/forgotpassword" element={<ForgotPasswordPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
