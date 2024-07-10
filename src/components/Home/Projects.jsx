import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../utils/scrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";


const Projects = () => {
  const images = [
    {
      src: "/ibpo.png",
      alt: "Oshogbo Project",
      id: 2,
      animation: "slide-right",
    },
    { src: "/ospo.png", alt: "Ibadan Project", id: 1, animation: "slide-up" },
    { src: "/ospo.png", alt: "Warri Project", id: 4, animation: "slide-down" },

  ];

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in",
    });
  }, []);

  return (
    <div className="px-4 py-8 text-whiteText md:px-12 text-center flex flex-col items-center gap-4 bg-secondary">
      <h1
        className="font-bold text-2xl"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        Our Projects
      </h1>
      <p data-aos="fade-up">
        UNAB global energy provides reliable and sustainable energy services for
        small, medium, and large businesses and residents across our target
        markets.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 m lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className={`${
              index === images.length - 1
                ? "md:col-start-2 lg:col-start-auto"
                : ""
            }`}
            data-aos={image.animation}
          >
            <Link
              to={`/projects/${image.id}`}
              key={image.id}
              onClick={scrollToTop}
            >
              <img src={image.src} alt={image.alt} />
            </Link>
          </div>
        ))}
      </div>
      <Link to="/project" onClick={scrollToTop} data-aos="fade-up">
        <button className="text-[#E27B16] border border-[#E27B16] rounded-lg px-2 py-2 my-4">
          See More Projects

        </button>
      </Link>
    </div>
  );
};

export default Projects;
