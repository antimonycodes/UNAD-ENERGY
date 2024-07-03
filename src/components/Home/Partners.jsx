import React from "react";

const Partners = () => {
  const images = [
    "/atess.png",
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
    <div className="bg-[#fbfbe7] px-4 py-8">
      <h1 className="font-bold text-2xl text-center text-darkText">
        OEM Partners
      </h1>
      <div className="logo whitespace-nowrap mt-20 md:mt-[5rem] overflow-hidden">
        <div className="logos-slide flex space-x-4">
          {duplicatedImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Partner logo ${index + 1}`}
              className="w-[10rem] h-auto object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
