// VolunteerComponent.js
import React from "react";
import "./VolunteerComponent.css"; // Import the CSS file

function VolunteerComponent() {
  const programs = [
    "Program 1",
    "Program 2",
    "Program 3",
    // Add more programs as needed
  ];

  return (
    <div className="volunteer-container">
      <h2>Volunteer Programs</h2>
      <ul className="program-list">
        {programs.map((program, index) => (
          <li key={index}>{program}</li>
        ))}
      </ul>
    </div>
  );
}

export default VolunteerComponent;
