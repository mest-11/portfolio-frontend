import ExperienceCard from "../../components/experienceCard";

const Experience = ({ experiences }) => {
  return (
    <div className=" flex flex-col px-36 py-10 gap-y-10">
      <div className=" flex">
        <div className="w-1/4">
          <span className="text-[22px] font-medium">
            Work <br />
            Experience
          </span>
        </div>

        <div className="flex flex-col gap-y-10 w-3/4 ">
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
    </div>
  );
};

export default Experience;
