import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Carousel = () => {
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

  // Settings for the slider
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4, // Number of slides to show at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Time between slides during autoplay
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-[#fbfbe7] px-4 py-8">
      <h1 className="font-bold text-2xl text-center text-darkText mb-20">
        OEM Partners
      </h1>
      <div className="w-full overflow-hidden">
        <Slider {...settings}>
          {images.map((src, index) => (
            <div key={index} className="px-2">
              <img
                src={src}
                alt={`Partner logo ${index + 1}`}
                className="mx-auto h-auto max-h-12 md:max-h-12 lg:max-h-16 "
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
