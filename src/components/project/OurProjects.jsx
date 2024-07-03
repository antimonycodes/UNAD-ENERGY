// import { Link } from "react-router-dom";
// const OurProjects = () => {
//   return (
//     <div className="px-4 py-8 md:px-12 bg-secondary text-whiteText text-center  flex flex-col items-center gap-8">
//       <h1 className="  text-3xl font-semibold text-center pb-12 pt-8">
//         Our Projects
//       </h1>
//       <p>
//         UNAB global energy provides reliable and sustainable energy services for
//         small, medium and large businesses and residents across our target
//         markets.
//       </p>
//       {/*  */}
//       <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         <img src="/oshogboOffice.png" alt="" />
//         <img src="/ibadanOffice.png" alt="" />
//         <img src="/warriOffice.png" alt="" />
//         <img src="/ileolujiOffice.png" alt="" />
//       </div>
//     </div>
//   );
// };

// export default OurProjects;

import { Link } from "react-router-dom";

const OurProjects = () => {
  const images = [
    { src: "/oshogboOffice.png", alt: "Oshogbo Office", id: 1 },
    { src: "/ibadanOffice.png", alt: "Ibadan Office", id: 2 },
    { src: "/warriOffice.png", alt: "Warri Office", id: 3 },
    { src: "/ileolujiOffice.png", alt: "Ileoluji Office", id: 4 },
  ];

  return (
    <div className="px-4 py-8 md:px-12 bg-secondary text-whiteText text-center flex flex-col items-center gap-8">
      <h1 className="text-3xl font-semibold text-center pb-12 pt-8">
        Our Projects
      </h1>
      <p>
        UNAB global energy provides reliable and sustainable energy services for
        small, medium and large businesses and residents across our target
        markets.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image) => (
          <Link to={`/projects/${image.id}`} key={image.id}>
            <img src={image.src} alt={image.alt} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OurProjects;
