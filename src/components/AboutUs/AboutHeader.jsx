import { useEffect, useState } from "react";
import Nav from "../Nav";

const AboutHeader = () => {
  const [backgroundImage, setBackgroundImage] = useState("/contactbg.png");

  useEffect(() => {
    const updateBackground = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        setBackgroundImage("/aboutmobile.png");
      } else {
        setBackgroundImage("/contactbg.png");
      }
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
      className="p-4 md:px-12 md:py-4 h-[500px] bg-center bg-cover bg-no-repeat relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Nav />
      <div className="p-[7%]">
        <h1 className="text-5xl md:text-7xl font-bold max-w-[40rem] leading-[4rem] md:leading-[6rem]">
          Delivering Alternative <span className="text-orangee"> Energy</span>{" "}
          Solutions
        </h1>
      </div>
    </div>
  );
};

export default AboutHeader;
