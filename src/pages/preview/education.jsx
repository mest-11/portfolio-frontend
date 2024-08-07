import EducationCard from "../../components/educationCard";

const Education = ({ education }) => {
  return (
    <div className=" flex flex-col px-36 py-10 gap-y-10">
      <div className=" flex">
        <div className="w-1/4">
          <span className="text-[22px] font-medium">Education</span>
        </div>

        <div className="flex flex-col gap-y-10 w-3/4">
          {education?.map((education) => (
            <EducationCard
              schoolName={education.schoolName}
              program={education.program}
              startDate={education.startDate}
              endDate={education.endDate}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
