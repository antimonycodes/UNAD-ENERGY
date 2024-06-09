const ServiceGrid = () => {
  const services = [
    {
      logo: "/sell.png",
      heading: "Sell and Swap",
      paragraph:
        "Our outright sale option allows customers to pay the outright cost to purchase a system.",
    },
    {
      logo: "/consult.png",
      heading: "Consultation",
      paragraph:
        "Arnergy's finance model allows customers to lease the asset towards ownership after 36 months.",
    },
    {
      logo: "/install.png",
      heading: "Solar upgrade and install",
      paragraph:
        "Our outright sale option allows customers to pay the outright cost to purchase a system.",
    },
  ];
  return (
    <div className=" px-4 py-8 md:px-12  bg-[#f9f9f9]">
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service, index) => (
          <div
            key={index}
            className=" flex flex-col items-center gap-4 bg-white rounded-lg p-4"
          >
            <div className=" bg-[#002d01] rounded-[100%] p-12">
              <img
                src={service.logo}
                alt=""
                className=" w-[40px] aspect-[1/1]"
              />
            </div>
            <h1 className=" text-[#0d8f01] font-bold text-2xl">
              {service.heading}
            </h1>
            <p className=" text-darkText font-semibold text-center ">
              {service.paragraph}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceGrid;
