import ProjectsCard from "../../components/projectsCard";
import { useOutletContext } from "react-router-dom";

const Projects = () => {
  const { projects } = useOutletContext();

  return (
    <div className="bg-[#F3F3F3]">
      <div className="flex flex-col px-8 md:px-16 lg:px-36 py-10 md:py-20">
        <span className="text-[1.5rem] md:text-[2rem] font-bold antialiased pb-10 md:pb-20">
          Projects
        </span>

        <div className="flex flex-col justify-center gap-y-16 md:gap-y-24">
          {projects?.map((project, index) => (
            <ProjectsCard
              key={index}
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
