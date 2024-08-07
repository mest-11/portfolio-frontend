import React from "react";
import Skills from "./skills";
import Education from "./education";
import Experience from "./experience1";
import Achieve from "./achieve";
import { useOutletContext } from "react-router-dom";

const Resume = () => {
  const { skills, experiences, education, achievements } = useOutletContext();

  return (
    <div className="bg-[#F3F3F3]">
      <Skills skills={skills} />
      <div className="bg-slate-200 h-[0.5px] w-full shadow-lg shadow-slate-300 "></div>
      <Experience experiences={experiences} />
      <div className="bg-slate-200 h-[0.5px] w-full shadow-lg shadow-slate-300 "></div>
      <Education education={education} />
      <div className="bg-slate-200 h-[0.5px] w-full shadow-lg shadow-slate-300 "></div>
      <Achieve achievements={achievements} />
    </div>
  );
};

export default Resume;
