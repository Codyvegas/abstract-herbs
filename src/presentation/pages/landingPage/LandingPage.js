import "./LandingPage.css";
import { enterBtnText, infoText, welcomeMessage } from "./constants";
import landingWelcomeImg from "../../../assets/images/landing_welcome.jpg";
import landingSecondaryImg from "../../../assets/images/landing_secondary.jpg";

/* 
-container
    -large photo
    -welcome to the herbs (absolute)
        -enter button 

-paragraph container
-large photo container
    -large photo
*/

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="welcome-container">
        <img className="welcome-img" src={landingWelcomeImg} alt="" />
        <div className="welcome-inner-container">
          <h1>{welcomeMessage}</h1>
          <button className="welcome-btn" onClick={() => {}}>
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
