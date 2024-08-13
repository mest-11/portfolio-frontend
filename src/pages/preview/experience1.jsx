import ExperienceCard from "../../components/experienceCard";

const Experience = ({ experiences }) => {
  return (
      <div className=" px-36 pt-5 justify-center scale-up-center items-center bg-[#F3F3F3] m-10 rounded-lg pb-20">
       
        <div className="flex flex-col justify-center items-center">
          
            <span className="text-[22px] font-medium pb-10 pt-8 ">
              Work Experience
            </span>
        </div>

        <div className="flex flex-col gap-y-10 ">
          {experiences?.map((experiences) => (
            <ExperienceCard
              role={experiences.role}
              companyName={experiences.companyName}
              skills={experiences.skills}
              startDate={experiences.startDate}
              endDate={experiences.endDate}
            />
          ))}
        </div>
      </div>
  );
};

export default Experience;
