import "./NftOgPage.css";
import { introParagraph, largeParagraph, note } from "./constants";
import OgKing from "../../../assets/images/og_king.jpg";
import grid_herbs from "../../../assets/images/500_herbs.jpg";
import ImageGrid from "../../components/imageGrid/ImageGrid";
import { gatherImagesFromFolder } from "../../../utils/utils";

function OgHerbsPage() {
  return (
    <div className="og-page">
      <div className="king-herb"></div>
      <div className="intro-paragraph"></div>
      <button></button>
      <hr />
      <h1></h1>
      <p></p>
      <p></p>
      <div className="500-herbs"></div>
    </div>
  );
}

export default OgHerbsPage;
