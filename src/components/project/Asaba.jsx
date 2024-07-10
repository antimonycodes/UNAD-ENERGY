import React from "react";
import { Link } from "react-router-dom";

const Asaba = () => {
  const images = [
    {
      src: "/nuibpo.png",
      alt: "Oshogbo Project",
      id: 2,
    },
    {
      src: "/nuopo.png",
      alt: "Ibadan Project",
      id: 1,
    },
    {
      src: "/nuilpo.png",
      alt: "Warri Project",
      id: 4,
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="px-4 md:px-12 py-12 flex flex-col gap-12 items-center">
      <h1 className="text-2xl text-center text-darkText font-semibold">Agency</h1>
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

export default Asaba;
