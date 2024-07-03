const Impact = () => {
  return (
    <div className=" bg-secondary px-4 py-8 md:px-12 text-center md:left md:text-left text-whiteText flex flex-col md:flex-row gap-8 ">
      <div className=" basis-[80%]">
        <h1 className=" text-3xl font-semibold  pb-8">Our Impact</h1>
        <p className=" font-medium">
          To deliver energy solutions for productive use by deploying products,
          services and systems that power business operations and improve
          economic outcomes for our clients
        </p>
        <div>
          <ol className=" font-medium pt-8">
            <li>
              Reducing carbon emission and pollution in the regions we serve.
            </li>
            <li>
              Reducing energy poverty from the bottom to the top of the pyramid.
            </li>
            <li>
              Making SMEs run profitably with flexible payment for energy
              services.
            </li>
          </ol>
        </div>
      </div>
      {/*  */}
      <div className=" w-full basis-[100%]">
        <img src="/impactt.png" alt="" className=" w-full object-cover" />
      </div>
    </div>
  );
};

export default Impact;
