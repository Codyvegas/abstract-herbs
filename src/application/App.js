import AppRoutes from "./Routes";
import Header from "../presentation/components/header/Header";
import Footer from "../presentation/components/footer/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
