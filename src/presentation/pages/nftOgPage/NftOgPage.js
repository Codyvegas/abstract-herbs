import "./NftOgPage.css";
import * as constants from "./constants";
import OgKing from "../../../assets/images/og_king.jpg";
import Grid_Herbs from "../../../assets/images/500_herbs.jpg";

function OgHerbsPage() {
  return (
    <div className="og-page">
      <div className="first-section">
        <img src={OgKing} alt="" />
        <div className="wording">
          <h1>OG HERBS</h1>
          <p>{constants.introParagraph}</p>
          <button className="buy-btn" onClick={constants.onOgClick}>
            BUY AN OG HERB
          </button>
        </div>
      </div>
      <hr />
      <div className="bottom-section">
        <h1>HOW IT ALL STARTED</h1>
        <p>{constants.largeParagraph}</p>
        <p>{constants.note}</p>
      </div>
      <div className="500-herbs">
        <img src={Grid_Herbs} alt="" />
      </div>
    </div>
  );
}

export default OgHerbsPage;
