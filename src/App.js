import React, { useState } from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom"; // Import necessary components
import "./App.css";
import HomePage from "./components/Home";
import LoginPage from "./components/login/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState("govt");

  const handleLogin = (selectedUserType) => {
    setIsLoggedIn(true);
    setUserType(selectedUserType);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <Router>
      <div>
        <nav>
          {isLoggedIn && (
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          )}
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              isLoggedIn ? (
                <HomePage userType={userType} handleLogout={handleLogout} />
              ) : (
                <LoginPage handleLogin={handleLogin} />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
