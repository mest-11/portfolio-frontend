import React from "react";

const ProjectsCard = ({ projectName, description, link, image }) => {
  return (
    <div className=" flex flex-col justify-center gap-y-5">
      <div className=" flex gap-x-10">
        <div className="w-1/2 flex flex-col gap-y-2">
          <span className="text-[20px] font-semibold">{projectName}</span>
          <p>{description}</p>
          <a href={link} target="_blank" className="font-semibold text-[#60A5FA] text-[17px]" >Click here to view</a>
        </div>

        <div className="flex flex-col  w-1/2 ">
          <img src={image} alt="project image" className="w-[90%] h-[40vh] " />
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
