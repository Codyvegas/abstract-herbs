import "./TheHerbs.css";
import OgKing from "../../../assets/images/og_king.jpg";
import DevilKing from "../../../assets/images/devil_king.jpg";
import * as helpers from "./HerbHelpers";

function TheHerbPage() {
  return (
    <div className="herb-container">
      <button className="og-king-btn" onClick={helpers.onOgClick}>
        <img src={OgKing} alt="" />
      </button>
      <button className="devil-king-btn" onClick={helpers.onAbstractClick}>
        <img src={DevilKing} alt="" />
      </button>
    </div>
  );
}

export default TheHerbPage;
