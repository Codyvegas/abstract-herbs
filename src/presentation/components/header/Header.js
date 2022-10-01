import "./Header.css";
import { Link, Outlet } from "react-router-dom";
import discordLogo from "../../../assets/icons/discord_logo.svg";
import herbLogo from "../../../assets/icons/herb_logo.svg";
import twitterLogo from "../../../assets/icons/twitter_logo.svg";
import * as helpers from "./helpers.js";

function Header() {
  const renderHerbLogo = () => {
    return (
      <Link to="/">
        <img src={herbLogo} alt=""></img>
      </Link>
    );
  };

  const renderNavLinks = () => {
    return (
      <nav>
        <Link to="/project">Project</Link>
        <Link to="/">Artist</Link>
        <Link to="/">The Herbs</Link>
      </nav>
    );
  };

  const renderSocialLinks = () => {
    return (
      <div className="social-links-container">
        <button onClick={helpers.onTwitterClick}>
          <img src={twitterLogo} alt="Twitter"></img>
        </button>
        <button onClick={helpers.onDiscordClick}>
          <img src={discordLogo} alt="Discord"></img>
        </button>
        <button className="opensea-btn" onClick={helpers.onOpenseaClick}>
          <img
            src="https://storage.googleapis.com/opensea-static/Logomark/Logomark-Transparent%20White.svg"
            alt="Opensea"
          ></img>
        </button>
      </div>
    );
  };

  return (
    <div className="header">
      {renderHerbLogo()}
      <div className="header-links-container">
        {renderNavLinks()}
        {renderSocialLinks()}
      </div>
      <Outlet />
    </div>
  );
}

export default Header;
