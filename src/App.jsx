import Footer from "./components/Footer";

import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Faqs from "./pages/Faqs";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Store from "./pages/Store";
import Project from "./pages/Project";
import AOS from "aos";
import "aos/dist/aos.css";
import "aos/dist/aos.js";
import { useEffect } from "react";

function App() {
  // const [aos, setAos] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: "600",
      easing: "ease-in-out-sine",
    });
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/project" element={<Project />} />
        <Route path="/store" element={<Store />} />
        <Route path="/faqs" element={<Faqs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
