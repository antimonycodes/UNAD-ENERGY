const CaseStudies = () => {
  return (
    <div className=" px-4 py-6 md:px-12 text-center text-darkText flex flex-col items-center gap-8">
      <h1 className=" font-semibold text-3xl">Case Studies</h1>
      <p className="font-medium  ">
        UNAB global energy provides reliable and sustainable energy services for
        small, medium and large businesses and residents across our target
        markets.
      </p>
      <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
        <div>
          <div className=" relative rounded-xl min-w-[18rem] ">
            <img src="/alpha.jpeg" alt="" className=" relative rounded-xl " />
            <div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div>
            <p className=" absolute w-full text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              Powering a multi-use facility to empower students in Eastern
              Nigeria.
            </p>
          </div>
        </div>
        {/*  */}
        <div>
          <div className=" relative  min-w-[18rem] ">
            <img src="/alpha.jpeg" alt="" className=" relative rounded-xl" />
            <div className="absolute inset-0 bg-black opacity-50  rounded-xl"></div>
            <p className=" absolute w-full text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              Powering a multi-use facility to empower students in Eastern
              Nigeria.
            </p>
          </div>
        </div>
        {/*  */}
        <div>
          <div className=" relative ">
            <img src="/alpha.jpeg" alt="" className=" relative rounded-xl" />
            <div className="absolute inset-0 bg-black opacity-50  rounded-xl"></div>
            <p className=" absolute w-full text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              Powering a multi-use facility to empower students in Eastern
              Nigeria.
            </p>
          </div>
        </div>
        {/*  */}
        {/* <div>
          <div className=" relative ">
            <img src="/alpha.jpeg" alt="" className=" relative rounded-xl" />
            <div className="absolute inset-0 bg-black opacity-50  rounded-xl"></div>
            <p className=" absolute w-full text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              Powering a multi-use facility to empower students in Eastern
              Nigeria.
            </p>
          </div>
        </div> */}
      </div>
      {/* btn */}
      <button className=" border border-[#e27b16] w-fit text-[#e27b16] py-2 px-4 font-medium rounded-lg font-medium">
        Learn More
      </button>
    </div>
  );
};

export default CaseStudies;
