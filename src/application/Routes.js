import { Routes, Route } from "react-router-dom";
import LandingPage from "../presentation/pages/landingPage/LandingPage";
import ProjectPage from "../presentation/pages/projectPage/ProjectPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/project" element={<ProjectPage />} />
    </Routes>
  );
}

export default AppRoutes;
