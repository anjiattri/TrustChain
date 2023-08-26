import React, { useState } from "react";

function LoginPage({ handleLogin }) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("govt");

  const handleLoginClick = () => {
    handleLogin(userType);
  };

  return (
    <div className="App">
      <div className="filter-options">
        <label>
          Filter by:
          <select
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
          >
            <option value="govt">Government</option>
            <option value="volunteer">Volunteer</option>
          </select>
        </label>
      </div>
      <h1>Login Page</h1>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
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
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLoginClick}>Login</button>
    </div>
  );
}

export default LoginPage;
