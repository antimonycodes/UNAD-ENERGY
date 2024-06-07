const Partners = () => {
  return (
    <div className=" px-4 py-6 text-whiteText md:px-12 text-center flex flex-col items-center gap-4 bg-secondary">
      <h1 className=" text-2xl text-center">UNAB Clients and Partners</h1>
      <p>
        Join the thousands of businesses and homeowners across the nation that
        have flipped the switch to UNAB global energy limited.
      </p>
      <div className=" py-4">
        <h1 className=" font-bold text-3xl">Clients</h1>
        <div className=" grid grid-cols-2 md:flex mt-8 gap-8">
          <img src="/sheda.png" alt="" width={140} />
          <img src="/sheda.png" alt="" width={140} />
          <img src="/sheda.png" alt="" width={140} />
          <img src="/sheda.png" alt="" width={140} />
        </div>
      </div>
      {/* partners */}
      <div className=" py-4">
        <h1 className=" font-bold text-3xl">Partners</h1>
        <div className=" grid grid-cols-2 md:flex mt-8 gap-8">
          <img src="/sheda.png" alt="" width={140} />
          <img src="/sheda.png" alt="" width={140} />
          <img src="/sheda.png" alt="" width={140} />
          <img src="/sheda.png" alt="" width={140} />
        </div>
      </div>
    </div>
  );
};

export default Partners;
