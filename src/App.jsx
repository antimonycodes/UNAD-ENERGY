import Footer from "./components/Footer";

import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Faqs from "./pages/Faqs";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Store from "./pages/Store";
import Project from "./pages/Project";

import AOSWrapper from "./components/AOSwrapper";
import ProjectDetails from "./components/project/ProjectDetails";

function App() {
  return (
    <AOSWrapper>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/project" element={<Project />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/store" element={<Store />} />
        <Route path="/faqs" element={<Faqs />} />
      </Routes>
      <Footer />
    </AOSWrapper>
  );
}

export default App;
