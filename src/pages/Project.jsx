import Asaba from "../components/project/Asaba";
import Ileoluji from "../components/project/Ileoluji";
import Osogbo from "../components/project/Osogbo";
import OurProjects from "../components/project/OurProjects";
import Ph from "../components/project/Ph";
import ProjectHeader from "../components/project/ProjectHeader";
import Warri from "../components/project/Warri";
import Ibadan from "../components/project/ibadan";

const Project = () => {
  return (
    <div>
      <ProjectHeader />
      <OurProjects />
      <Asaba />
      <Ibadan />
      <Osogbo />
      <Warri />
      <Ph />
      <Ileoluji />
    </div>
  );
};

export default Project;
