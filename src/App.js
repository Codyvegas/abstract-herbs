import "./App.css";
import Header from "./presentation/components/header/Header";
import LandingPage from "./presentation/pages/landingPage/LandingPage";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="pages-container">
        <LandingPage />
      </div>
    </div>
  );
}

export default App;
