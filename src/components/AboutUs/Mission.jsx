const Mission = () => {
  return (
    <div className=" bg-primary px-4 py-6 md:px-12 text-darkText text-center flex flex-col md:flex-row gap-8">
      <div className=" flex flex-col gap-8 w-full md:basis-[50%]">
        <h1 className=" text-3xl font-semibold">Our Mission</h1>
        <p className=" font-medium ">
          To deliver energy solutions for productive use by deploying products,
          services and systems that power business operations and improve
          economic outcomes for our clients.
        </p>
        <h1 className=" text-3xl font-semibold">Our Vision</h1>
        <p className=" font-medium">
          To provide sustainable solutions to energy reliability issues across
          emerging markets.
        </p>
      </div>
      <div className=" w-full ">
        <img src="/mission.png" alt="" className=" " />
      </div>
    </div>
  );
};

export default Mission;
