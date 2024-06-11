import AOS from "aos";
import "aos/dist/aos.css";
import "aos/dist/aos.js";
import { useEffect } from "react";
const Scroll = () => {
  useEffect(() => {
    AOS.init({
      duration: "900",
      //   easing: "ease-in-out-sine",
      easing: "ease-in",
    });
  }, []);
  return <div></div>;
};

export default Scroll;
