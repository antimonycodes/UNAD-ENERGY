import { useEffect, useState } from "react";
import Nav from "../Nav";

const FaqsHeader = () => {
  const [backgroundImage, setBackgroundImage] = useState("/faqsbg.png");

  useEffect(() => {
    const updateBackground = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        setBackgroundImage("/faqbg2.png");
      } else {
        setBackgroundImage("/faqsbg.png");
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
      className="p-4 md:px-12 md:py-4 h-[600px] bg-center bg-cover bg-no-repeat relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <Nav />
      <div className="pt-[7%]">
        <h1 className="text-5xl md:text-7xl font-bold max-w-[40rem] leading-[4rem] md:leading-[6rem] text-whiteText">
          Have a Question? Look here
        </h1>
      </div>
    </div>
  );
};

export default FaqsHeader;
