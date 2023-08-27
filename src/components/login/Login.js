import React, { useState } from "react";
import "./LoginPage.css"; // Import your custom CSS file for styling

function LoginPage({ handleLogin }) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("govt");

  const handleLoginClick = () => {
    handleLogin(userType);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-heading">Welcome to Credify</h1>
        <div className="user-type-options">
          <label>
            <input
              type="radio"
              value="govt"
              checked={userType === "govt"}
              onChange={() => setUserType("govt")}
            />
            Government
          </label>
          <label>
            <input
              type="radio"
              value="volunteer"
              checked={userType === "volunteer"}
              onChange={() => setUserType("volunteer")}
            />
            Volunteer
          </label>
        </div>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleLoginClick}>Generate DID</button>
        <button onClick={handleLoginClick}>Already a User? Click Here</button>

      </div>
    </div>
  );
}

export default LoginPage;
