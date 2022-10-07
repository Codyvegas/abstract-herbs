import "./ProjectPage.css";
import projectWelcomeImg from "../../../assets/images/project_welcome.jpg";
import roadmapImg from "../../../assets/images/project_closingimg.jpg";
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
    require.context(
      "../../../assets/images/projectPageGrid",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );

  return (
    <div className="project-page">
      <div className="project-welcome-container">
        <div className="project-welcome-img-container">
          <img src={projectWelcomeImg} alt="" />
        </div>
        <div className="project-welcome-header">
          <strong>WELCOME TO THE HERBS FAM</strong>
        </div>
      </div>
      <hr />
      <div className="project-herbcosmos-container">
        <div className="project-herbcosmos">
          <h1>{headerMessage}</h1>
          <p>{herbCosmos}</p>
        </div>
        <ImageGrid images={projectPageNfts} gap={20} numColumns={2} />
      </div>
      <hr />
      <Purchase />
      <hr />
      <div className="project-herbfam">
        <h1>{herbFam}</h1>
        <p>{herbFamP}</p>
      </div>
      <hr />
      <div className="project-roadmap">
        <h1>{roadmap}</h1>
        <p>{roadmapP}</p>
        <img src={roadmapImg} alt="" />
      </div>
    </div>
  );
}

export default ProjectPage;
