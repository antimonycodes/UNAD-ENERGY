import { useEffect, useState } from "react";
import Nav from "../Nav";

const ProjectHeader = () => {
  const [backgroundImage, setBackgroundImage] = useState("/storebg.png");

  useEffect(() => {
    const updateBackground = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        setBackgroundImage("/storemobile.png");
      } else {
        setBackgroundImage("/storebg.png");
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
      className="p-4 md:px-12 md:py-4 h-[500px] relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Nav />
      <div className="pt-[7%]  ">
        <h1 className="text-5xl md:text-7xl font-bold max-w-[40rem] leading-[4rem] md:leading-[6rem]">
          Coming Soon
        </h1>
      </div>
    </div>
  );
};

export default ProjectHeader;
