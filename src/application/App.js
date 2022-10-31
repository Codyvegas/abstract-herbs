import AppRoutes from "./Routes";
import Header from "../presentation/components/header/Header";
import Footer from "../presentation/components/footer/Footer";
import ScrollToTop from "./Scroll.js";

function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
