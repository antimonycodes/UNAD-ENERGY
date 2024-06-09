// import fade
import About from "../components/Home/About";
import Careers from "../components/Home/Careers";
import CaseStudies from "../components/Home/CaseStudies";
import ChooseUs from "../components/Home/ChooseUs";
import Header from "../components/Home/Header";
import Partners from "../components/Home/Partners";
import ServiceGrid from "../components/Home/ServiceGrid";
import Services from "../components/Home/Services";
import Video from "../components/Home/Video";

const Home = () => {
  return (
    <div className=" bg-primary">
      {/* <Fade/> */}
      <Header />
      <Services />
      <ServiceGrid />
      <About />
      <ChooseUs />
      <Partners />
      <Video />
      <CaseStudies />
      <Careers />
    </div>
  );
};

export default Home;
