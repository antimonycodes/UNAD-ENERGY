import useCountUp from "./useCountUp";
import useInView from "./useInView";

const About = () => {
  const aboutGrid = [
    { number: "266+", text: "Happy Paying Customers" },
    { number: "2MW+", text: "Current Installed Capacity" },
    { number: "9MWh", text: "Current Storage Capacity" },
    { number: "7+", text: "Years in Business" },
  ];

  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <div ref={ref} className="px-4 py-8 text-center bg-secondary lg:px-28">
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-3xl font-bold text-whiteText">About Us</h1>
        <p className="md:max-w-[30rem] font-semibold">
          Our mission is to deliver energy solutions for productive use. We do
          this by deploying products, services and systems that power homes and
          business operations and improve economic outcomes for our clients.​
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-8 w-fit text-whiteText">
          {aboutGrid.map((item, index) => (
            <NumberCard
              key={index}
              number={item.number}
              text={item.text}
              inView={inView}
            />
          ))}
        </div>
        <button className="text-[#E27B16] border border-[#E27B16] py-2 px-4 rounded-md">
          Know more about us
        </button>
      </div>
    </div>
  );
};

const NumberCard = ({ number, text, inView }) => {
  const numericValue = extractNumber(number);
  const count = useCountUp(numericValue, 2000, inView); // 2000ms duration for counting up
  const suffix = number.replace(/[0-9]/g, ""); // Extract non-numeric part

  return (
    <div className="px-8 py-6 bg-gradient-to-b text from-[#E5E812] to-[#109B3B] rounded-lg">
      <h2 className="pb-4 text-4xl font-bold text-whiteText">
        {count}
        {suffix}
      </h2>
      <p className="font-medium text-whiteText">{text}</p>
    </div>
  );
};

const extractNumber = (str) => {
  return parseInt(str.replace(/\D/g, ""), 10);
};

export default About;
