import React, { useEffect, useState } from "react";
import Nav from "../Nav";

const ContactHeader = () => {
  const [backgroundPosition, setBackgroundPosition] = useState("center");

  useEffect(() => {
    const updateBackgroundPosition = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        setBackgroundPosition("left");
      } else {
        setBackgroundPosition("center");
      }
    };

    // Update background position on mount
    updateBackgroundPosition();

    // Add event listener for window resize
    window.addEventListener("resize", updateBackgroundPosition);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", updateBackgroundPosition);
  }, []);

  return (
    <div
      className="p-4 md:px-12 md:py-4 h-[500px] bg-cover bg-no-repeat relative"
      style={{
        backgroundImage: "url(/contactbg.png)",
        backgroundPosition: backgroundPosition,
        backgroundSize: "cover",
      }}
    >
      <Nav />
      <div className="pt-[7%]">
        <h1 className="text-5xl md:text-7xl font-bold max-w-[40rem] leading-[4rem] md:leading-[6rem]">
          Start the <span className="text-orangee">Solar</span> Conversation
        </h1>
      </div>
    </div>
  );
};

export default ContactHeader;
