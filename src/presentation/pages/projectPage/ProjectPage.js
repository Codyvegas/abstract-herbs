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

function ProjectPage() {
  return (
    <div className="project-page">
      <div className="welcome-container">
        <img className="welcome-img" src={projectWelcomeImg} alt="" />
      </div>
      <div className="welcome-header">
        <strong>WELCOME TO THE HERBS FAM</strong>
      </div>
      <hr />
      <h1>{headerMessage}</h1>
      <p>{herbCosmos}</p>
      <div className="img-container" />
      <hr />
      <Purchase />
      <hr />
      <h1>{herbFam}</h1>
      <p>{herbFamP}</p>
      <hr />
      <h1>{roadmap}</h1>
      <p>{roadmapP}</p>
      <img className="closing-img" src={projectClosingImg} alt="" />
    </div>
  );
}

export default ProjectPage;
