import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer"
import Home from "./pages/home";
import Portfolio from "./pages/portfolio";
import Socials from "./pages/socials";
// import DevHeader from "./components/DevHeader";

function App() {
  return (
    <>
      {/* <DevHeader /> */}
      <Navbar />
      <ScrollToTop />
      
      <main className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/socials" element={<Socials />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;