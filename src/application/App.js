import AppRoutes from "./Routes";
import Header from "../presentation/components/header/Header";
import Footer from "../presentation/components/footer/Footer";
import ScrollToTop from "./Scroll.js";
// import { SliderData } from "../presentation/components/posterSlider/SliderData";
// import Slider from "../presentation/components/posterSlider/Slider";

function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <Header />
      <AppRoutes />
      {/* <Slider slides={SliderData} /> */}
      <Footer />
    </div>
  );
}

export default App;
