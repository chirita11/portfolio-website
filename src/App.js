import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
import Resume from "./components/resume/Resume";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Footer />
      <Portfolio />
      <Footer />
      <Resume />
      <Footer />
    </div>
  );
}

export default App;
