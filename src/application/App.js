import "./App.css";
import Header from "../presentation/components/header/Header";
import LandingPage from "../presentation/pages/landingPage/LandingPage";
import ProjectPage from "../presentation/pages/projectPage/ProjectPage";
import Footer from "../presentation/components/footer/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="pages-container">
        {/* <LandingPage /> */}
        <ProjectPage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
