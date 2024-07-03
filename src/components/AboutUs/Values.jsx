import React, { useState } from "react";

const Values = () => {
  const cards = [
    {
      icon: "/proffessionalism.png",
      heading: "Professionalism",
      paragraph:
        "Tackle problems head-on. Lead the way. Build unique services, products, markets and opportunities for all.",
    },
    {
      icon: "/integrity.png",
      heading: "Integrity",
      paragraph:
        "Tackle problems head-on. Lead the way. Build unique services, products, markets and opportunities for all.",
    },
    {
      icon: "/trust.png",
      heading: "Trust",
      paragraph:
        "Tackle problems head-on. Lead the way. Build unique services, products, markets and opportunities for all.",
    },
    {
      icon: "/ingenuity.png",
      heading: "Ingenuity",
      paragraph:
        "Tackle problems head-on. Lead the way. Build unique services, products, markets and opportunities for all.",
    },
    {
      icon: "/teamwork.png",
      heading: "Team work",
      paragraph:
        "Tackle problems head-on. Lead the way. Build unique services, products, markets and opportunities for all.",
    },
  ];

  // const [currentIndex, setCurrentIndex] = useState(0);
  // const itemsPerPage = 4;
  // const totalPages = Math.ceil(cards.length / itemsPerPage);

  // const handleDotClick = (index) => {
  //   setCurrentIndex(index * itemsPerPage);
  // };

  // const visibleCards = cards.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div className="bg-secondary px-4 py-16 text-whiteText md:px-12">
      <h1 className="text-center font-semibold text-3xl pb-8">
        UNAB's Core Values
      </h1>
      <p className="font-medium text-center pb-12">
        A set of core values guides our work.
      </p>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-12">
          {cards.map((card, index) => (
            <div key={index} className="flex flex-col items-center gap-4">
              <div className="bg-[#e1e5e2] w-fit rounded-full p-8">
                <img src={card.icon} alt="" width={80} />
              </div>
              <h1 className=" text-whiteText text-2xl font-semibold">
                {card.heading}
              </h1>
            </div>
          ))}
        </div>
        {/* <div className="flex justify-center mt-8">
          {Array.from({ length: totalPages }).map((_, index) => (
            <div
              key={index}
              className={`w-4 h-4 rounded-full mx-2 cursor-pointer ${
                currentIndex / itemsPerPage === index
                  ? "bg-[#0D8F41]"
                  : "bg-[#35A1374D]"
              }`}
              onClick={() => handleDotClick(index)}
            ></div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Values;
