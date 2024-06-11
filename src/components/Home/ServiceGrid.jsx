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
      logo: "/sell.png",
      heading: "Sell and Swap",
      paragraph:
        "Our outright sale option allows customers to pay the outright cost to purchase a system.",
      animation: "slide-right",
    },
    {
      logo: "/consult.png",
      heading: "Consultation",
      paragraph:
        "Arnergy's finance model allows customers to lease the asset towards ownership after 36 months.",
      animation: "slide-down",
    },
    {
      logo: "/install.png",
      heading: "Solar upgrade and install",
      paragraph:
        "Our outright sale option allows customers to pay the outright cost to purchase a system.",
      animation: "slide-left",
    },
  ];
  return (
    <div className=" px-4 py-8 md:px-12  bg-[#f9f9f9] overflow-hidden">
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service, index) => (
          <div
            key={index}
            className=" flex flex-col items-center gap-4 bg-white rounded-lg p-4"
            data-aos={service.animation}
          >
            <div className=" bg-[#002d01] hover:bg-[#0d8f01] rounded-[100%] p-12">
              <img
                src={service.logo}
                alt=""
                className=" w-[40px] aspect-[1/1]"
              />
            </div>
            <h1 className=" text-[#0d8f01] font-bold text-2xl">
              {service.heading}
            </h1>
            <p className=" text-darkText font-semibold text-center ">
              {service.paragraph}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceGrid;
