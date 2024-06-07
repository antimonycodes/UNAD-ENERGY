const ChooseUs = () => {
  const ChooseUsServices = [
    {
      logo: "/quality.png",
      heading: "Quality Products",
      paragraph:
        "All our products are based on international Solar and highway traffic  standard/certification.",
    },
    {
      logo: "/warranty.png",
      heading: "Service Warranty",
      paragraph:
        "All our installations and products comes with warranty. Also, services warranty available too.",
    },
    {
      logo: "/experience.png",
      heading: "Highly Experienced",
      paragraph:
        "7 years plus of experience in providing sustainable solar electricity for both small and big companies.",
    },
    {
      logo: "/save.png",
      heading: "Save Energy Cost",
      paragraph:
        "Saving energy cost over the years by maintenance of the original solar products gotten from us.",
    },
  ];

  return (
    <div className="bg-primary flex flex-col items-center gap-8 text-darkText px-4 py-6 md:px-12">
      <h1 className="text-3xl font-semibold">Why choose us</h1>
      <p className="font-medium">End to end solutions for economic clusters.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {ChooseUsServices.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col items-center gap-4 bg-white rounded-lg p-4 drop-shadow-md ${
              index === ChooseUsServices.length - 1 ? "lg:col-start-2" : ""
            }`}
          >
            <div className="bg-[#002d01] rounded-full p-12">
              <img src={service.logo} alt="" width={50} />
            </div>
            <h1 className="text-[#0d8f01] font-bold">{service.heading}</h1>
            <p className="text-black text-center text-sm">
              {service.paragraph}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseUs;
