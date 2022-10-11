import { Routes, Route } from "react-router-dom";
import LandingPage from "../presentation/pages/landingPage/LandingPage";
import ProjectPage from "../presentation/pages/projectPage/ProjectPage";
import ArtistPage from "../presentation/pages/artistPage/ArtistPage";
import TheHerbsPage from "../presentation/pages/theHerbsPage/TheHerbs";
// import NftOgPage from "../presentation/pages/nftOgPage/NftOgPage";
// import NftAbstractPage from "../presentation/pages/nftAbstractPage/NftAbstractpage";

function AppRoutes() {
  return (
    <div style={{ paddingTop: "130px" }}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/artist" element={<ArtistPage />} />
        <Route path="/the-herbs" element={<TheHerbsPage />} />
        {/* <Route path="/og-herbs" element={<OgHerbsPage />} />
        <Route path="/abstract-herbs" element={<AbstractHerbsPage />} /> */}
      </Routes>
    </div>
  );
}

export default AppRoutes;

// button routes need work
