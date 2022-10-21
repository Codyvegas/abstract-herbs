import "./ArtistPage.css";
import artistDavidImg from "../../../assets/images/artist_david.jpg";
import { david, description, endingParagraph } from "./constants";
import ImageGrid from "../../components/imageGrid/ImageGrid";
import { gatherImagesFromFolder } from "../../../utils/utils";
import HERB from "../../../assets/images/HERB.jpg";

function ArtistPage() {
  const artistPageNfts = gatherImagesFromFolder(
    require.context(
      "../../../assets/images/artistPageImgs",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );

  return (
    <div className="artist-page">
      <div className="artist-img-container">
        <div className="words">
          <h1>{david}</h1>
          <p>{description}</p>
        </div>
        <img src={artistDavidImg} alt="" />
      </div>
      <hr />
      <div className="btm-container">
        <p>{endingParagraph}</p>
        <ImageGrid images={artistPageNfts} gap={20} numColumns={1} />
      </div>
      <div className="btm-txt-logo">
        <img src={HERB} alt="" />
      </div>
    </div>
  );
}

export default ArtistPage;
