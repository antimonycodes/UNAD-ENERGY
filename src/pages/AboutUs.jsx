import AboutHeader from "../components/AboutUs/AboutHeader";
// import Climate from "../components/AboutUs/Climate";
import Esg from "../components/AboutUs/Esg";
// import Focus from "../components/AboutUs/Focus";
import Impact from "../components/AboutUs/Impact";
import Mission from "../components/AboutUs/Mission";
import OurStory from "../components/AboutUs/OurStory";
import Values from "../components/AboutUs/Values";
// import Partners from "../components/Home/Partners";
// import Clients from "../components/Home/Clients";
import Carousel from "../components/Home/Carousel";
import Management from "../components/Home/Management";

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
      <Mission />
      <Impact />
      {/* <Clients
        bgColor="bg-secondary"
        textColor="text-whiteText"
        animate={false}
      /> */}
      {/* <Climate /> */}
      {/* <Focus /> */}
      {/* <Partners /> */}
      <Carousel />
      <Management/>
    </div>
  );
};

export default AboutUs;
