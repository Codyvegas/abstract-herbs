import "./ProjectPage.css";
import projectWelcomeImg from "../../../assets/images/project_welcome.jpg";
import projectClosingImg from "../../../assets/images/project_closingimg.jpg";
import {
  herbCosmos,
  headerMessage,
  herbFam,
  herbFamP,
  roadmap,
  roadmapP,
} from "./constants";
import Purchase from "../../components/purchase/Purchase";
import ImageGrid from "../../components/imageGrid/ImageGrid";
import { gatherImagesFromFolder } from "../../../utils/utils";

function ProjectPage() {
  const projectPageNfts = gatherImagesFromFolder(
    require.context("../../../assets/images", false, /\.(png|jpe?g|svg)$/)
  );

  return (
    <div className="project-page">
      <div className="welcome-container">
        <img className="welcome-img" src={projectWelcomeImg} alt="" />
      </div>
      <div className="welcome-header">
        <strong>WELCOME TO THE HERBS FAM</strong>
      </div>
      <hr />
      <div className="herbcosmos-container">
        <div className="herbcosmos">
          <h1>{headerMessage}</h1>
          <p>{herbCosmos}</p>
        </div>
        <ImageGrid
          images={projectPageNfts}
          imageWidth={"80px"}
          numColumns={2}
        />
      </div>
      <hr />
      <Purchase />
      <hr />
      <div className="herbfam">
        <h1>{herbFam}</h1>
        <p>{herbFamP}</p>
      </div>
      <hr />
      <div className="roadmap">
        <h1>{roadmap}</h1>
        <p>{roadmapP}</p>
      </div>
      <img className="closing-img" src={projectClosingImg} alt="" />
    </div>
  );
}

export default ProjectPage;
