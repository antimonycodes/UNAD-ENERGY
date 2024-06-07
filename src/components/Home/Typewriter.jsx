import React, { useEffect, useState } from "react";
// import "./Typewriter.css";

const Typewriter = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [erasing, setErasing] = useState(false);

  useEffect(() => {
    let timer;
    if (erasing) {
      timer = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
      }, 300);
    } else {
      timer = setTimeout(() => {
        setDisplayedText((prev) => text.slice(0, prev.length + 1));
      }, 300);
    }

    if (!erasing && displayedText === text) {
      setTimeout(() => setErasing(true)); // Pause before erasing
    } else if (erasing && displayedText === "") {
      setErasing(false); // Switch back to typing after erasing
    }

    return () => clearTimeout(timer);
  }, [text, displayedText, erasing]);

  return (
    <span
      className={`typewriter-text text-[#E27B16] max-w-[15rem] ${
        erasing ? "erasing" : "typing"
      }`}
    >
      {displayedText}
    </span>
  );
};

export default Typewriter;
