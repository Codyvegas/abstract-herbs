import "./NftAbstractPage.css";
import {
  intro,
  theBeginning,
  note,
  above500,
  above500p2,
  abstractSunday,
} from "./constants";
import devilKing from "../../../assets/images/devil_king.jpg";
import LizardPoster from "../../../assets/images/lizard_poster.jpg";
import ImageGrid from "../../components/imageGrid/ImageGrid";
import { gatherImagesFromFolder } from "../../../utils/utils";

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
        <h1>Abstract Herbs</h1>
        <p>{intro}</p>
        <button className="abstract-purhcase-btn">BUY AN ABSTRACT HERB</button>
        <img src={devilKing} alt="" />
      </div>
      <hr />
      <div className="the beginning">
        <h1>THE BEGINNING</h1>
        <p>{theBeginning}</p>
        <p>{note}</p>
        <ImageGrid images={abstractPageNfts} gap={20} numColumns={1} />
      </div>
      <hr />
      <div className="above-500">
        <h1>ABOVE THE #500</h1>
        <p>{above500}</p>
        <p>{above500p2}</p>
      </div>
      <hr />
      <div className="abstract-sunday">
        <h1>ABSTRACT SUNDAY</h1>
        <p>{abstractSunday}</p>
        <img src={LizardPoster} alt="" />
      </div>
      <hr />

      <ImageGrid images={abstractPageNfts2} gap={30} numColumns={3} />
    </div>
  );
}

export default AbstractHerbsPage;
