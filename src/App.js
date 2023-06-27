import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Navbar from "./components/Navbar";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import AskQuestion from "./pages/AskQuestionPage";

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
          <Route path="/askquestion" element={<AskQuestion />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
