import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Clients = ({
  bgColor = "bg-primary",
  textColor = "text-darkText",
  animate = true,
}) => {
  const clients = [
    { src: "/fireswitch.png", alt: "Fireswitch", animation: "slide-right" },
    { src: "/ulesson.png", alt: "ULesson", animation: "slide-down" },
    { src: "/dorlan.png", alt: "Dorlan", animation: "slide-up" },
    { src: "/immigation.png", alt: "Immigation", animation: "slide-right" },
  ];

  useEffect(() => {
    if (animate) {
      AOS.init({
        duration: 700,
        easing: "ease-in",
      });
    }
  }, [animate]);

  return (
    <div
      className={`px-4 py-8 ${textColor} md:px-12 text-center flex flex-col items-center gap-8 ${bgColor}`}
    >
      <h1
        className="font-bold text-2xl pt-8"
        data-aos={animate ? "fade-up" : undefined}
      >
        UNAB Clients
      </h1>
      <p data-aos={animate ? "fade-up" : undefined}>
        Join the thousands of businesses and homeowners across the nation that
        have flipped the switch to UNAB global energy limited.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20">
        {clients.map((client, index) => (
          <div
            key={index}
            className={`${
              index === clients.length - 1
                ? "md:col-start-2 lg:col-start-auto"
                : ""
            }`}
            data-aos={animate ? client.animation : undefined}
          >
            <img src={client.src} alt={client.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
