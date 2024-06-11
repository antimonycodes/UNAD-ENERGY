import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AOSWrapper = ({ children }) => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in",
    });

    // Ensure to refresh AOS to detect changes
    AOS.refresh();
  }, []);

  // Reapply AOS refresh whenever children change
  useEffect(() => {
    AOS.refresh();
  }, [children]);

  return <>{children}</>;
};

export default AOSWrapper;
