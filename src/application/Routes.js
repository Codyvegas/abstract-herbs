import { Routes, Route } from "react-router-dom";
import LandingPage from "../presentation/pages/landingPage/LandingPage";
import ProjectPage from "../presentation/pages/projectPage/ProjectPage";

function AppRoutes() {
  return (
    <div style={{ paddingTop: "130px" }}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/project" element={<ProjectPage />} />
      </Routes>
    </div>
  );
}

export default AppRoutes;
