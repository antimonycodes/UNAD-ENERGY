const Partners = () => {
  const images = [
    "/atess.png.png",
    "/jinko.png",
    "/jasolar.png",
    "/huawei.png",
    "/schneider.png",
    "/victronenergy.png",
    "/SMA.png",
    "/AlphaESS.png",
  ];
  const duplicatedImages = [...images, ...images];
  return (
    <div className=" bg-[#fbfbe7] px-4 py-8">
      <h1 className=" font-bold text-2xl text-center text-darkText">
        OEM Partners
      </h1>
      <div className="logo whitespace-nowrap mt-20 md:mt-[10rem] ">
        <div className="logos-slide">
          {duplicatedImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt=""
              className="w-[10rem] aspect-[1/1]"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
