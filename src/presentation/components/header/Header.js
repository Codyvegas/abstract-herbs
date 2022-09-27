import "./Header.css";
import discordLogo from "../../../assets/icons/discord_logo.svg";
import herbLogo from "../../../assets/icons/herb_logo.svg";
import twitterLogo from "../../../assets/icons/twitter_logo.svg";

//This is a functional component
function Header() {
  const onLogoClick = () => {
    console.log("logo was clicked");
  };
  const onTwitterClick = () => {
    window.open("https://twitter.com/DrGrinspooon", "_blank");
  };
  const onDiscordClick = () => {
    window.open("https://discord.com/invite/prJWEjUV", "_blank");
  };

  return (
    <div className="header">
      <button onClick={onLogoClick}>
        <img src={herbLogo} alt=""></img>
      </button>
      <div className="header-links-container">
        <nav>
          <a href="https://www.google.com/" target="_blank">
            Project
          </a>
          <a href="https://www.google.com/" target="_blank">
            Artist
          </a>
          <a href="https://www.google.com/" target="_blank">
            The Herbs
          </a>
        </nav>
        <div className="social-links-container">
          <button onClick={onTwitterClick}>
            <img src={twitterLogo} alt="Twitter"></img>
          </button>
          <button onClick={onDiscordClick}>
            <img src={discordLogo} alt="Discord"></img>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
