import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes";
import Header from "../presentation/components/header/Header";
import Footer from "../presentation/components/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <div className="pages-container">
          <AppRoutes />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
