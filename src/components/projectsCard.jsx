import React from "react";

const ProjectsCard = ({ projectName, description, link, image }) => {
  return (
    <div className="flex flex-col justify-center gap-y-5">
      <div className="flex flex-col md:flex-row gap-y-5 md:gap-y-0 gap-x-0 md:gap-x-10">
        <div className="w-full md:w-1/2 flex flex-col gap-y-2">
          <span className="text-[20px] font-semibold">{projectName}</span>
          <p>{description}</p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#60A5FA] text-[17px]"
          >
            Click here to view
          </a>
        </div>

        <div className="flex flex-col w-full md:w-1/2">
          <img
            src={image}
            alt="project image"
            className="w-full h-[30vh] md:h-[40vh] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
