import React from "react";
import "./VolunteerComponent.css";

function VolunteerComponent({ handleLogout }) {
  const programs = [
    "Program 1",
    "Program 2",
    "Program 3",
    // Add more programs as needed
  ];

  return (
    <div className="volunteer-container">
      <nav className="navbar-blue">
        <ul className="nav-list">
          <li>Available Programs</li>
          <li>Existing Programs</li>
        </ul>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </nav>
      <div className="program-list-container">
        <h2>Volunteer Programs</h2>
        <ul className="program-list">
          {programs.map((program, index) => (
            <li key={index}>{program}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default VolunteerComponent;
