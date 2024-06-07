import { useState, useEffect } from "react";

const useCountUp = (end, duration, reset) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(0); // Reset count to 0 when reset changes

    let start = 0;
    const increment = end / (duration / 10);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        start = end;
      }
      setCount(Math.ceil(start));
    }, 10);

    return () => clearInterval(timer);
  }, [end, duration, reset]);

  return count;
};

export default useCountUp;
