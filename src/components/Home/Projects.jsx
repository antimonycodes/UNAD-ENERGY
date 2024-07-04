import { Link } from "react-router-dom";
import { scrollToTop } from "../../utils/scrollToTop";

const Projects = () => {
  const images = [
    { src: "/oshogbo.png", alt: "Oshogbo Project", id: 1 },
    { src: "/ibadan.png", alt: "Ibadan Project", id: 2 },
    { src: "/warri.png", alt: "Warri Project", id: 3 },
    { src: "/ileoluji.png", alt: "Ileoluji Project", id: 4 },
  ];

  return (
    <div className="px-4 py-8 text-whiteText md:px-12 text-center flex flex-col items-center gap-4 bg-secondary">
      <h1 className="font-bold text-2xl">Our Projects</h1>
      <p>
        UNAB global energy provides reliable and sustainable energy services for
        small, medium and large businesses and residents across our target
        markets.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className={`${
              index === images.length - 1
                ? "md:col-start-2 lg:col-start-auto"
                : ""
            }`}
          >
            <Link
              to={`/projects/${image.id}`}
              key={image.id}
              onClick={scrollToTop}
            >
              <img src={image.src} alt={image.alt} />
            </Link>
          </div>
        ))}
      </div>
      <Link to="/project" onClick={scrollToTop}>
        <button className="text-[#E27B16] border border-[#E27B16] rounded-lg px-2 py-2 my-4">
          See More Products
        </button>
      </Link>
    </div>
  );
};

export default Projects;
