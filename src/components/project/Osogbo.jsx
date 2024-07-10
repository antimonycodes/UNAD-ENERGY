import React from "react";
import { Link } from "react-router-dom";

const Osogbo = () => {
  const images = [
    { src: "/ripo.png", alt: "Image 1", id: 2 },
    { src: "/ropo.png", alt: "Image 2", id: 1 },
    { src: "/riipo.png", alt: "Image 3", id: 4 },
    // Add more images as needed
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="px-4 md:px-12 py-12 flex flex-col gap-12 items-center">
      <h1 className="text-2xl text-center text-darkText font-semibold">Residential</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto">
        {images.map((image) => (
          <Link
            to={`/projects/${image.id}`}
            key={image.id}
            onClick={scrollToTop}
          >
            <img src={image.src} alt={image.alt} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Osogbo;
