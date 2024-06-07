const Focus = () => {
  const focuses = [
    {
      mainText: "Focus 1",
      subText:
        "We can deliver quality solutions with superior customer service and timely after-sales technical support",
    },
    {
      mainText: "Focus 2",
      subText:
        "We can deliver quality solutions with superior customer service and timely after-sales technical support",
    },
    {
      mainText: "Focus 3",
      subText:
        "We can deliver quality solutions with superior customer service and timely after-sales technical support",
    },
  ];
  return (
    <div className=" bg-secondary px-4 py-6 md:px-12 text-center md:text-left text-whiteText ">
      <h1 className=" pb-8 text-3xl font-semibold text-center">
        Our Focus Area
      </h1>
      <p className=" font-medium pb-12">
        We improve businesses and economic outcomes by emphasising reliable
        energy for productive use and reducing OPEX costs that threaten the
        sustainability of our target business clusters. We have perfected our
        role as a distributed utility by reducing pressure on the national grid
        and allowing local grid activity to serve industrial zones and the
        public good, thus stimulating economic growth.
      </p>
      <div className=" flex flex-col md:flex-row gap-8">
        {focuses.map((focus, index) => (
          <div key={index} className=" flex flex-col gap-4">
            <h1 className=" text-greenText text-3xl font-semibold">
              {focus.mainText}
            </h1>
            <p>{focus.subText}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Focus;
