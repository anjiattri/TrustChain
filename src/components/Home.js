import React from "react";
import GovernmentComponent from "./govt/GovtComponent";
import VolunteerComponent from "./volunteer/VolunteerComponent";

function HomePage({ userType, handleLogout }) {
  return (
    <div className="App">
      {/* <h1>Welcome to the Home Page</h1>
      <p>
        You are logged in as a{" "}
        {userType === "govt" ? "government" : "volunteer"} user.
      </p> */}
      <div>
        {userType === "govt" ? <GovernmentComponent handleLogout={handleLogout} /> : <VolunteerComponent  handleLogout={handleLogout}/>}
      </div>
      {/* <button onClick={handleLogout}>Logout</button> */}
    </div>
  );
}

export default HomePage;
