import AOS from "aos";
import "aos/dist/aos.css";
import "aos/dist/aos.js";
import { useEffect } from "react";
const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: "600",
      easing: "ease-in-out-sine",
    });
  }, []);
  return (
    <div className=" px-4 py-8 md:px-12 text-darkText bg-[#f9f9f9]">
      <div className=" text-center items-center flex flex-col gap-6">
        <h1 className="text-3xl font-semibold" data-aos="slide-down">
          Our Services
        </h1>
        <p className=" font-medium md:max-w-[40rem]" data-aos="slide-up">
          UNAB global energy provides reliable and sustainable energy services
          for small, medium and large businesses and residents across our target
          markets.
        </p>
      </div>
    </div>
  );
};

export default Services;
