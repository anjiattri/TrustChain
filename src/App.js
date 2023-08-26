import React, { useEffect, useState } from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
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
    setUserType("govt"); // Reset user type on logout
  };

  // Check for stored login state on app load
  useEffect(() => {
    const storedIsLoggedIn = localStorage.getItem("isLoggedIn");
    if (storedIsLoggedIn === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  // Update stored login state when it changes
  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);

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
