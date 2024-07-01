const FocusArea = () => {
  const areas = [
    {
      img: "/focus1.png",
      text: "Contribute in the reduction of energy poverty.",
    },
    {
      img: "/focus2.png",
      text: "Reduce operational energyexpense for Cad1 SAIE’s and Healthcare..",
    },
    {
      img: "/focus3.png",
      text: "Provide reliable clean and eco-friendly power supply.",
    },
    {
      img: "/focus4.png",
      text: "CReduce Co2 emissions and green house effect.",
    },
  ];
  return (
    <>
      <div className=" text-whiteText bg-secondary px-4 py-12 md:px-12  ">
        <div>
          <h1 className=" text-center font-semibold text-2xl pb-12">
            Our Focus Areas
          </h1>
          <p>
            We improve businesses and economic outcomes by emphasising reliable
            energy for productive use and reducing OPEX costs that threaten the
            sustainability of our target business clusters. We have perfected
            our role as a distributed utility by reducing pressure on the
            national grid and allowing local grid activity to serve industrial
            zones and the public good, thus stimulating economic growth.
          </p>
        </div>
        {/*  */}
        <div className=" pt-16 grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {areas.map((area, index) => (
            <div key={index} className="flex flex-col items-center gap-8">
              <div className=" bg-primary w-fit p-4 rounded-lg">
                <img src={area.img} alt="" className=" w-[40px]" />
              </div>
              <h1 className=" text-center">{area.text}</h1>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FocusArea;
