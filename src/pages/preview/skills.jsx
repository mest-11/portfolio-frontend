import CircularSkill from "../../components/skillsMeasure";

const Skills = ({ skills }) => {
  return (
    <div className="px-4 sm:px-8 md:px-20 lg:px-36 pt-5 bg-[#F3F3F3] mx-4 md:mx-10 my-10 rounded-lg pb-20">
      {/* Title aligned to the corner */}
      <h1 className="font-bold antialiased text-[1.5rem] sm:text-[2rem] pt-5 ">
        Resume
      </h1>
      
      <div className="flex flex-col justify-center items-center mt-12"> {/* Adjust margin top to accommodate for the absolute positioning */}
        <span className="text-[20px] sm:text-[22px] font-medium pb-10 pt-6">
          Skills & Expertise
        </span>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 antialiased">
          {skills.map((skill, index) => (
            <CircularSkill
              key={index}
              name={skill.name}
              levelOfProficiency={skill.levelOfProficiency}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
