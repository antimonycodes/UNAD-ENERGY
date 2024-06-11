import { useEffect, useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Nav from "../Nav";

const AboutHeader = () => {
  const [backgroundImage, setBackgroundImage] = useState("/contactbg.png");
  // const { text } = useTypewriter({
  //   words: ["Energy", "degjgew"],
  //   loop: true,
  // });
  const [text, helper] = useTypewriter({
    words: ["Energy"],
    loop: {},
    typeSpeed: "200",
    deleteSpeed: "200",
  });

  // const { isType, isDelete, isDelay, isDone } = helper;
  // console.log(text);

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
      className="p-4 md:px-12 md:py-4 h-[600px] bg-center bg-cover bg-no-repeat relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Nav />
      <div className="p-[7%] px-0">
        <h1 className="text-5xl md:text-7xl font-bold max-w-[40rem] leading-[4rem] md:leading-[5rem]">
          Delivering Alternative <br />
          <span className="text-orangee">{text}</span>
          <span>
            <Cursor cursorColor="#e27b16" />
          </span>
          <br />
          Solutions
        </h1>
      </div>
    </div>
  );
};

export default AboutHeader;
