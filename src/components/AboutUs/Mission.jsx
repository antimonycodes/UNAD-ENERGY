const Mission = () => {
  return (
    <div className="bg-secondary px-4 py-8 md:px-12 text-whiteText flex flex-col md:flex-row gap-8">
      <div className="flex flex-col gap-8 md:gap-12 w-full md:w-1/2">
        <h1 className="text-3xl font-semibold">Our Mission</h1>
        <p className="font-medium leading-10">
          To deliver energy solutions for productive use by deploying products,
          services and systems that power business operations and improve
          economic outcomes for our clients.
        </p>
        <h1 className="text-3xl font-semibold">Our Vision</h1>
        <p className="font-medium leading-10">
          To utilize renewable energy to generate climate-friendly, effective
          and sustainable electricity with the use of robust solar system
          technology suitable to meet all energy needs.
        </p>
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <img
          src="/impactt.png"
          alt=""
          className="w-full h-auto md:max-h-[25rem] object-cover"
        />
      </div>
    </div>
  );
};

export default Mission;
