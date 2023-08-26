import React from "react";

function HomePage({ userType }) {
  return (
    <div className="App">
      <h1>Welcome to the Home Page</h1>
      <p>
        You are logged in as a{" "}
        {userType === "govt" ? "government" : "volunteer"} user.
      </p>
    </div>
  );
}
export default HomePage;
