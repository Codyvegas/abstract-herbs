import "./NftOgPage.css";
import { introParagraph, largeParagraph, note } from "./constants";
import OgKing from "../../../assets/images/og_king.jpg";
import Grid_Herbs from "../../../assets/images/500_herbs.jpg";

function OgHerbsPage() {
  return (
    <div className="og-page">
      <div className="first-section">
        <img src={OgKing} alt="" />
        <h1>OG HERBS</h1>
        <p>{introParagraph}</p>
        <button>BUY AN OG HERB</button>
      </div>
      <hr />
      <div className="bottom-section">
        <h1>HOW IT ALL STARTED</h1>
        <p>{largeParagraph}</p>
        <p>{note}</p>
      </div>
      <div className="500-herbs">
        <img src={Grid_Herbs} alt="" />
      </div>
    </div>
  );
}

export default OgHerbsPage;
