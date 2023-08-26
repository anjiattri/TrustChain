import React from "react";
import GovernmentComponent from "./govt/GovtComponent";
import VolunteerComponent from "./volunteer/VolunteerComponent";

function HomePage({ userType, handleLogout }) {
  return (
    <div className="App">
      <div>
        {userType === "govt" ? (
          <GovernmentComponent />
        ) : (
          <VolunteerComponent handleLogout={handleLogout} />
        )}
      </div>
    </div>
  );
}

export default HomePage;
