import "./LandingPage.css";
// import { Link, Outlet } from "react-router-dom"; do i need this?
import {
  onEnterClick,
  enterBtnText,
  infoText,
  welcomeMessage,
} from "./constants";
import landingWelcomeImg from "../../../assets/images/landing_welcome.jpg";
import landingSecondaryImg from "../../../assets/images/landing_secondary.jpg";

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="welcome-container">
        <img className="welcome-img" src={landingWelcomeImg} alt="" />
        <div className="welcome-inner-container">
          <h1>{welcomeMessage}</h1>
          <button className="welcome-btn" onClick={onEnterClick.onEnterClick}>
            {/* I dont know how to link this to the project page (<Link to="/project">Project</Link>) */}
            {enterBtnText}
          </button>
        </div>
      </div>
      <div className="info-text">
        <p>{infoText}</p>
      </div>
      <img className="secondary-img" src={landingSecondaryImg} alt="" />
    </div>
  );
}
export default LandingPage;

//enter button is not finished and needs routing help
