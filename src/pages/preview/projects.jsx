import ProjectsCard from "../../components/projectsCard";
import { useOutletContext } from "react-router-dom";
const Projects = () => {
  const { projects } = useOutletContext();

  return (
    <div className="bg-[#F3F3F3]">
      <div className="flex flex-col px-36 py-20">
        <span className=" text-[2rem] font-bold antialiased pb-20 ">
          Projects
        </span>

        <div className="flex flex-col justify-center gap-y-24 ">
          {projects?.map((project) => (
            <ProjectsCard
              projectName={project.projectName}
              description={project.description}
              image={`https://savefiles.org/${project.image}?shareable_link=307`}
              link={`${project?.link}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
