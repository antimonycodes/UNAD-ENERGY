const Video = () => {
  return (
    <div className=" px-4 py-8 md:px-12 text-[#131313CC] flex flex-col md:flex-row gap-12">
      <div className=" bg-emerald-600 w-full md:basis-[60%]">
        <video src=""></video>
      </div>
      {/*  */}
      <div className=" flex flex-col gap-8 md:basis-[40%]">
        <h2 className=" text-3xl font-semibold">
          End to end solutions for economic clusters.
        </h2>
        <p className=" font-semibold">
          Rapidly supply extensible systems through error-free human capital.
          Assertively implement alternative niche markets after client-centric
          partnerships.
        </p>
        <div className=" flex gap-4 flex-col md:flex-row">
          <button className=" bg-[#e27b16] w-full text-white py-2 rounded-lg font-medium">
            Energy Calculator
          </button>
          <button className=" border border-[#e27b16] w-full text-[#e27b16] py-2 rounded-lg font-medium">
            View Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default Video;
