const Careers = () => {
  const cards = [
    {
      img: "/beta.jpeg",
      heading: "Careers",
      paragraph: "Explore available opportunities  on the UNAB team.",
    },
    {
      img: "/beta.jpeg",
      heading: "Careers",
      paragraph: "Explore available opportunities   on the UNAB team.",
    },
    {
      img: "/beta.jpeg",
      heading: "Careers",
      paragraph: "Explore available opportunities  on the UNAB team.",
    },
  ];
  return (
    <div className=" text-darkText px-4 py-6 md:px-12 text-center flex flex-col gap-8">
      <h1 className=" text-3xl font-semibold">More than just Power</h1>
      <p className="  font-semibold">
        We are constantly innovating, bringing new initiatives and services to
        deliver value to you.
      </p>
      <div className=" grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 drop-shadow-sm">
        {cards.map((card, index) => (
          <div
            key={index}
            className=" flex flex-col gap-12 pb-4 text-center drop-shadow-md rounded-lg bg-white"
          >
            <div className=" relative">
              <img src={card.img} alt="" className="  object-cover h-[17rem]" />
              <div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div>
            </div>

            <h1 className=" text-3xl font-semibold text-[#35A137]">
              {card.heading}
            </h1>
            <p className="  font-semibold pb-4">{card.paragraph}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Careers;
