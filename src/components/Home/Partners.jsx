const Partners = () => {
  return (
    <div className=" px-4 py-8 text-whiteText md:px-12 text-center flex flex-col items-center gap-4 bg-secondary">
      <h1 className=" font-bold text-2xl">Our Projects</h1>
      <p>
        UNAB global energy provides reliable and sustainable energy services for
        small, medium and large businesses and residents across our target
        markets.
      </p>
      {/*  */}
      <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <img src="/oshogbo.png" alt="" />
        <img src="/ibadan.png" alt="" />
        <img src="/warri.png" alt="" />
        <img src="/ileoluji.png" alt="" />
      </div>
      <button className=" text-[#E27B16] border border-[#E27B16] rounded-lg px-1 py-2 ">
        See More Products
      </button>
    </div>
  );
};

export default Partners;
