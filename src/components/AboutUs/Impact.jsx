const Impact = () => {
  return (
    <div className="bg-primary px-4 py-8 md:px-12 text-center md:left md:text-left text-darkText flex flex-col md:flex-row gap-8">
      <div className="basis-[80%]">
        <h1 className="text-3xl font-semibold pb-8">Our Impact</h1>
        <p className="font-medium leading-10">
          To deliver energy solutions for productive use by deploying products,
          services and systems that power business operations and improve
          economic outcomes for our clients.
        </p>
        <div className=" ml-8 text-left ">
          <ol className="font-medium pt-8 flex flex-col gap-8 list-disc">
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
      <div className="w-full basis-[100%]">
        <img src="/visionn.png" alt="" className="w-full object-cover" />
      </div>
    </div>
  );
};

export default Impact;
