import ProjectsCard from "../../components/projectsCard"
import SubFooter from "../../components/subFooter"
import SubNavBar from "../../components/subNavBar"

const Projects = () => {
  return (
    <div className="bg-[#F3F3F3]">
      <SubNavBar />

      <div  className="flex flex-col px-36 py-20">

      <span className=" text-[2rem] font-bold antialiased pb-20 ">
        Projects
      </span>

      <div className="flex-flex-col justify-center ">
      <ProjectsCard/>
      <ProjectsCard/>
      <ProjectsCard/>
      <ProjectsCard/>
      <ProjectsCard/>
      <ProjectsCard/>
      <ProjectsCard/>
      </div>

      </div>
      <SubFooter/>


    </div>




  )
}

export default Projects