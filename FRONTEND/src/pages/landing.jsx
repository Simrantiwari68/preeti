import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

export default function LandingPage() {
  const navigate = useNavigate();

  const handleGuestAccess = () => {
    navigate("/home"); // Navigate to the main app or home page for guest users
  };

  return (
    <div className="LandingPageContainer">
      <nav>
        <div className="NavHeader">
          <h2>Zoomera</h2>
        </div>
        <div className="NavList">
          <p role="button" onClick={handleGuestAccess} className="NavItem">
            Join as Guest
          </p>
          <p role="button" onClick={() => navigate("/signup")} className="NavItem">
            Register
          </p>
          <p role="button" onClick={() => navigate("/signin")} className="NavItem">
            Login
          </p>
        </div>
      </nav>

      <div className="LandingPageMainContainer">
        <div>
          <h1>
            <span style={{ color: "#FF9839" }}>Connect</span> with your loved
            ones
          </h1>
          <p>Cover a distance with Zoomera</p>
          <div role="button">
            <Link to="/home">Get Started</Link>
          </div>
        </div>
        <div>
          <img src="/mobile.png" alt="App Preview" />
        </div>
      </div>
    </div>
  );
}

