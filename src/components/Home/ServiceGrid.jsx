import AOS from "aos";
import "aos/dist/aos.css";
import "aos/dist/aos.js";
import { useEffect } from "react";
const ServiceGrid = () => {
  useEffect(() => {
    AOS.init({
      duration: "900",
      // easing: "ease-in-out-sine",
      easing: "ease-in",
    });
  }, []);
  const services = [
    {
      logo: "/energyaudit.png",
      heading: "Energy Audit and Technical Site Survey",
      animation: "fade-down-left",
    },
    {
      logo: "/system.png",
      heading: "System Design and Recommendation",
      animation: "slide-down",
    },
    {
      logo: "/installation.png",
      heading: "Installation and Commisioning",
      animation: "fade-down-left",
    },

    {
      logo: "/operation.png",
      heading: "Operation and maintenance",
      animation: "slide-down",
    },
  ];

  // className=" flex flex-col items-center justify-center bg-white rounded-lg p-12 ga
  return (
    <div className=" px-4 py-8 md:px-12  bg-[#f9f9f9] overflow-hidden">
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col items-center gap-4 bg-white rounded-lg px-8 py-16 drop-shadow-md ${
              index === services.length - 1 && "lg:col-start-2"
            }`}
            data-aos={service.animation}
          >
            <div className=" ">
              <img src={service.logo} alt="" className=" aspect-[1/1]" />
            </div>
            <h1 className=" text-[#0d8f01] text-center font-bold text-2xl">
              {service.heading}
            </h1>
            {/* <p className=" text-darkText font-semibold text-center ">
              {service.paragraph}
            </p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceGrid;
