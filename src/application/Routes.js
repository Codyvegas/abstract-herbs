import { Routes, Route } from "react-router-dom";
import LandingPage from "../presentation/pages/landingPage/LandingPage";
import ProjectPage from "../presentation/pages/projectPage/ProjectPage";
import ArtistPage from "../presentation/pages/artistPage/ArtistPage";
import TheHerbsPage from "../presentation/pages/theHerbsPage/TheHerbs";

function AppRoutes() {
  return (
    <div style={{ paddingTop: "130px" }}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/artist" element={<ArtistPage />} />
        <Route path="/the-herbs" element={<TheHerbsPage />} />
      </Routes>
    </div>
  );
}

export default AppRoutes;
