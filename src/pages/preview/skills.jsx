import CircularSkill from "../../components/skillsMeasure";

const Skills = ({ skills }) => {
  return (
      <div className=" px-36 pt-5 justify-center scale-up-center bg-[#F3F3F3] m-10 rounded-lg pb-20">
        <h1 className="font-bold antialiased text-[2rem]">Resume</h1>
        <div className="flex flex-col justify-center items-center">
          
            <span className="text-[22px] font-medium pb-20 pt-8 ">
              Skills & Expertise
            </span>
          

          
            <div className="grid grid-cols-5 gap-8 antialiased">
              {skills.map((skills) => (
                <CircularSkill
                  name={skills.name}
                  levelOfProficiency={skills.levelOfProficiency}
                />
              ))}
            </div>
        </div>
      </div>
  
  );
};

export default Skills;
