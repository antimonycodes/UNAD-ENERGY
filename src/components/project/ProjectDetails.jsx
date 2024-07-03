import { useParams } from "react-router-dom";
import ProjectHeader from "./ProjectHeader";

const ProjectDetails = () => {
  const { id } = useParams();

  const projects = {
    1: {
      title: "Oshogbo Passport Office",
      description:
        "UNAB global energy provides reliable and sustainable energy services for small, medium and large businesses and residents across our target markets.",
      images: ["/opo1.png", "/opo2.png", "/opo3.png", "/opo4.png"],
      images2: ["/opo5.png", "/opo6.png", "/opo7.png", "/opo8.png"],
    },
    2: {
      title: "Ibadan Passport Office",
      description:
        "UNAB global energy provides reliable and sustainable energy services for small, medium and large businesses and residents across our target markets.",
      images: ["/ipo1.png", "/ipo2.png", "/ipo3.png", "/ipo4.png"],
      images2: ["/ipo5.png", "/ipo6.png", "/ipo7.png", "/ipo8.png"],
    },
    3: {
      title: "Warri Passport Office",
      description:
        "UNAB global energy provides reliable and sustainable energy services for small, medium and large businesses and residents across our target markets.",
      images: ["/wpo1.png", "/wpo2.png", "/wpo3.png", "/wpo4.png"],
      images2: ["/wpo5.png", "/wpo6.png", "/wpo7.png", "/wpo8.png"],
    },
    4: {
      title: "Ileoluji Passport Office",
      description:
        "UNAB global energy provides reliable and sustainable energy services for small, medium and large businesses and residents across our target markets.",
      images: ["/ilpo1.png", "/ilpo2.png", "/ilpo3.png", "/ilpo4.png"],
      images2: ["/ilpo5.png", "/ilpo6.png", "/ilpo7.png", "/ilpo8.png"],
    },
  };

  const project = projects[id];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <>
      <ProjectHeader />
      <div className="px-4 py-12 md:px-12 text-center flex flex-col items-center gap-8 text-whiteText bg-secondary">
        <h1 className="text-3xl font-semibold">{project.title}</h1>
        <p>{project.description}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {project.images.map((image, index) => (
            <img
              src={image}
              alt={`${project.title} ${index + 1}`}
              key={index}
            />
          ))}
        </div>
        {/*  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
          {project.images2.map((image, index) => (
            <img
              src={image}
              alt={`${project.title} ${index + 1}`}
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
