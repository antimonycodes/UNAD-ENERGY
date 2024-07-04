import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Management = () => {
  const cards = [
    {
      img: "/eclipse.png",
      name: "Bright Antia",
      position: "CTO",
      animation: "slide-right",
    },
    {
      img: "/eclipse.png",
      name: "Timothy Ayodele",
      position: "CEO",
      animation: "slide-down",
    },
    {
      img: "/eclipse.png",
      name: "Kasarachi Lekwauwa",
      position: "CFO",
      animation: "fade-up",
    },
    {
      img: "/eclipse.png",
      name: "Jesse Joan",
      position: "HR/Admin",
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
    <div className="px-4 py-8 text-darkText">
      <h1 className="text-center font-bold text-2xl pb-12" data-aos="fade-up">
        Management Team
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-24">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`flex flex-col gap-4 items-center ${
              index === cards.length - 1
                ? "md:col-start-2 lg:col-start-auto"
                : ""
            }`}
            data-aos={card.animation}
          >
            <div>
              <img src={card.img} alt={card.name} />
            </div>
            <h1 className="font-semibold text-xl">{card.name}</h1>
            <p>{card.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Management;
