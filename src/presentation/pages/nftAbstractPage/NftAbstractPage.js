import "./NftAbstractPage.css";
import {
  intro,
  onAbstractClick,
  theBeginning,
  note,
  note2,
  note3,
  above500p1,
  above500p2,
  above500p3,
  above500p4,
  abstractSundayp1,
  abstractSundayp2,
} from "./constants";
import devilKing from "../../../assets/images/devil_king.jpg";
import LizardPoster from "../../../assets/images/lizard_poster.jpg";
import ImageGrid from "../../components/imageGrid/ImageGrid";
import { gatherImagesFromFolder } from "../../../utils/utils";
import Slider from "../../components/posterSlider/Slider";
// import { SliderData } from "../presentation/components/posterSlider/SliderData";

function AbstractHerbsPage() {
  const abstractPageNfts = gatherImagesFromFolder(
    require.context(
      "../../../assets/images/abstractPageGrid1",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );

  const abstractPageNfts2 = gatherImagesFromFolder(
    require.context(
      "../../../assets/images/abstractPageGrid2",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );

  return (
    <div className="abstract-page">
      <div className="abstract-purchase-container">
        <div className="first-section-wording">
          <h1>Abstract Herbs</h1>
          <p>{intro}</p>
          <button className="purchase-btn" onClick={onAbstractClick}>
            BUY AN ABSTRACT HERB
          </button>
        </div>
        <img src={devilKing} alt="" />
      </div>
      <hr />
      <div className="the-beginning-container">
        <div className="beginning-wording">
          <h1>THE BEGINNING</h1>
          <p>{theBeginning}</p>
          <br />
          <div className="italic-notes">
            <p>
              <em>{note}</em>
            </p>
            <br />
            <p>
              <em>{note2}</em>
            </p>
            <br />
            <p>
              <em>{note3}</em>
            </p>
          </div>
        </div>
        <div className="first-grid">
          <ImageGrid images={abstractPageNfts} gap={50} numColumns={1} />
        </div>
      </div>
      <hr />
      <div className="above-500-container">
        <div className="above-fillers">
          <h1>ABOVE THE #500</h1>
          <p>{above500p1}</p>
          <br />
          <p>{above500p2}</p>
        </div>
        <div className="above-section2">
          <p>{above500p3}</p>
          <br />
          <p>{above500p4}</p>
        </div>
      </div>
      <hr />
      <div className="abstract-sunday">
        <div className="sunday-words-container">
          <h1>ABSTRACT SUNDAY</h1>
          <p>{abstractSundayp1}</p>
          <br />
          <p>{abstractSundayp2}</p>
        </div>
        <div className="lizard-poster">
          <Slider />
          <img src={LizardPoster} alt="" />
        </div>
      </div>
      <hr />
      <div className="gallery">
        <h1>GALLERY</h1>
        <ImageGrid images={abstractPageNfts2} gap={30} numColumns={3} />
      </div>
    </div>
  );
}

export default AbstractHerbsPage;
