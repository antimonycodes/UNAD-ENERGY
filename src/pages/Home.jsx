// import fade
import About from "../components/Home/About";
// import Careers from "../components/Home/Careers";
// import CaseStudies from "../components/Home/CaseStudies";
import ChooseUs from "../components/Home/ChooseUs";
import Clients from "../components/Home/Clients";
import FocusArea from "../components/Home/FocusArea";
import Header from "../components/Home/Header";
import Management from "../components/Home/Management";
import Partners from "../components/Home/Partners";
import Projects from "../components/Home/Projects";
// import Partners from "../components/Home/Projects";
import ServiceGrid from "../components/Home/ServiceGrid";
import Services from "../components/Home/Services";
// import Video from "../components/Home/Video";

const Home = () => {
  return (
    <div className=" bg-primary">
      {/* <Fade/> */}
      <Header />
      <Services />
      <ServiceGrid />
      {/* <About /> */}
      <FocusArea />
      <ChooseUs />
      <Projects />
      <Clients />
      <Partners />
      {/* <Video /> */}
      {/* <CaseStudies /> */}
      {/* <Careers /> */}
      <Management />
    </div>
  );
};

export default Home;
