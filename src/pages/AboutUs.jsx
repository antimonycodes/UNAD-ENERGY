import AboutHeader from "../components/AboutUs/AboutHeader";
import Climate from "../components/AboutUs/Climate";
import Esg from "../components/AboutUs/Esg";
import Focus from "../components/AboutUs/Focus";
import Impact from "../components/AboutUs/Impact";
import Mission from "../components/AboutUs/Mission";
import OurStory from "../components/AboutUs/OurStory";
import Values from "../components/AboutUs/Values";
import Partners from "../components/Home/Partners";

const AboutUs = () => {
  // const headerData = {
  //   bannerImage: "/aboutBanner.png",
  //   title: "Welcome to Our Home Page",
  //   subtitle: "Experience the best services with us",
  // };
  return (
    <div className=" ">
      {/* <Header {...headerData} /> */}
      <AboutHeader />
      <OurStory />
      <Values />
      <Esg />
      <Climate />
      <Mission />
      <Focus />
      <Impact />
      <Partners />
    </div>
  );
};

export default AboutUs;
