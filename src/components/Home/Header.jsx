import { useEffect, useState } from "react";
import Nav from "../Nav";
import Typewriter from "./Typewriter"; // Import the Typewriter component

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoSwitch, setAutoSwitch] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const slides = [
    {
      img: "/banner.png",
    },
    {
      img: "/banner2.png",
    },
    {
      img: "/banner3.png",
    },
    {
      img: "/banner4.png",
    },
  ];

  useEffect(() => {
    if (autoSwitch) {
      const intervalId = setInterval(() => {
        nextSlide();
      }, 3000);

      return () => clearInterval(intervalId);
    }
  }, [currentIndex, autoSwitch]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < slides.length - 1 ? prevIndex + 1 : 0
    );
  };

  useEffect(() => {
    const updateBackground = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
    };

    // Update background on mount
    updateBackground();

    // Add event listener for window resize
    window.addEventListener("resize", updateBackground);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", updateBackground);
  }, []);

  return (
    <div
      className={`relative p-4 md:px-12 w-full bg-cover bg-center bg-no-repeat h-[400px] md:h-[600px] ${
        isMobile ? "bg-gradient-to-r from-[#060512] to-[#28992C]" : ""
      }`}
      style={{
        backgroundImage: !isMobile
          ? `url(${slides[currentIndex].img})`
          : ` linear-gradient(143deg, rgba(16,16,16,1) 46%, rgba(14,119,55,1) 57%)`,
      }}
    >
      {!isMobile && (
        <>
          <div className="absolute top-0 left-0">
            <img src="/gradient.png" alt="" width={480} />
          </div>
          <div className="absolute top-0 left-[30.3%]">
            <img src="/divider.png" alt="" width={412} />
          </div>
        </>
      )}

      <Nav />
      <div className="absolute z-50 top-[25%]  md:max-w-[650px] text-white text-5xl md:text-7xl font-semibold">
        <h1>Sustainable Solar Electricity for</h1>
        <Typewriter text="Homes" /> {/* Use the Typewriter component */}
      </div>
      {/* slider indicator */}
      {!isMobile && (
        <div className="flex absolute bottom-8 right-[20%]">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`h-2 rounded-full mx-1 cursor-pointer ${
                index === currentIndex ? "w-8" : "w-2"
              } ${index === currentIndex ? "bg-[#0D8F41]" : "bg-[#FFF4EC]"}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
