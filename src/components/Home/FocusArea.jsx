import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const FocusArea = () => {
  const areas = [
    {
      img: "/focus1.png",
      text: "Contribute in the reduction of energy poverty.",
      animation: "slide-right",
    },
    {
      img: "/focus2.png",
      text: "Reduce operational energy expense for Cad1 SAIE’s and Healthcare.",
      animation: "slide-up",
    },
    {
      img: "/focus3.png",
      text: "Provide reliable clean and eco-friendly power supply.",
      animation: "fade-down",
    },
    {
      img: "/focus4.png",
      text: "Reduce CO2 emissions and greenhouse effect.",
      animation: "slide-left",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-in",
    });
  }, []);

  return (
    <div className="text-whiteText bg-secondary px-4 py-12 md:px-12">
      <div>
        <h1
          className="text-center font-semibold text-2xl pb-12"
          data-aos="fade-up"
        >
          Our Focus Areas
        </h1>
        <p data-aos="fade-up">
          We improve businesses and economic outcomes by emphasizing reliable
          energy for productive use and reducing OPEX costs that threaten the
          sustainability of our target business clusters. We have perfected our
          role as a distributed utility by reducing pressure on the national
          grid and allowing local grid activity to serve industrial zones and
          the public good, thus stimulating economic growth.
        </p>
      </div>
      <div className="pt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {areas.map((area, index) => (
          <div
            key={index}
            className={`flex flex-col items-center gap-8 ${
              index === areas.length - 1
                ? "md:col-start-2 lg:col-start-auto"
                : ""
            }`}
            data-aos={area.animation}
          >
            <div className="bg-primary w-fit p-4 rounded-lg">
              <img src={area.img} alt="" className="w-[40px]" />
            </div>
            <h1 className="text-center px-8">{area.text}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FocusArea;
