import AOS from "aos";
import "aos/dist/aos.css";
import "aos/dist/aos.js";
import { useEffect } from "react";

const ChooseUs = () => {
  // const [aos, setAos] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: "700",
      // easing: "ease-in-out-sine",
      easing: "ease-in",
    });
  }, []);
  const ChooseUsServices = [
    {
      logo: "/products.png",
      heading: "Quality Products",
      paragraph:
        "All our products are based on international Solar and highway traffic  standard/certification.",
      animation: "slide-right",
    },
    {
      logo: "/warranty2.png",
      heading: "Service Warranty",
      paragraph:
        "All our installations and products comes with warranty. Also, services warranty available too.",
      animation: "slide-down",
    },
    {
      logo: "/experienced.png",
      heading: "Highly Experienced",
      paragraph:
        "7 years plus of experience in providing sustainable solar electricity for both small and big companies.",
      animation: "slide-left",
    },
    {
      logo: "/cost.png",
      heading: "Save Energy Cost",
      paragraph:
        "Saving energy cost over the years by maintenance of the original solar products gotten from us.",
      animation: "slide-up",
    },
  ];

  return (
    <div className="bg-primary flex flex-col items-center gap-8 text-darkText px-4 py-8 md:px-12">
      <h1
        className=" text-3xl font-semibold"
        data-aos="slide-left"
        data-aos-delay="500"
      >
        Why choose us
      </h1>
      <p className="font-medium" data-aos="slide-left" data-aos-delay="600">
        End to end solutions for economic clusters.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {ChooseUsServices.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col items-center gap-4 bg-white rounded-lg p-4 drop-shadow-md ${
              index === ChooseUsServices.length - 1 ? "lg:col-start-2" : ""
            }`}
            data-aos={service.animation}
          >
            <div className=" rounded-full p-12">
              <img src={service.logo} alt="" width={50} />
            </div>
            <h1 className="text-[#0d8f01] font-bold">{service.heading}</h1>
            <p className="text-darkText font-medium text-center ">
              {service.paragraph}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseUs;
