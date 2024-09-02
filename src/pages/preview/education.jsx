import EducationCard from "../../components/educationCard";

const Education = ({ education }) => {
  return (
    <div className="px-4 sm:px-8 md:px-20 lg:px-36 py-5 bg-[#F3F3F3] mx-4 md:mx-10 my-10 rounded-lg">
      <div className="flex flex-col justify-center items-center">
        <span className="text-[20px] sm:text-[22px] font-medium pb-8 pt-6">
          Education
        </span>
      </div>

      <div className="flex flex-col gap-y-6 md:gap-y-10">
        {education?.map((edu, index) => (
          <EducationCard
            key={index}
            schoolName={edu.schoolName}
            program={edu.program}
            startDate={edu.startDate}
            endDate={edu.endDate}
          />
        ))}
      </div>
    </div>
  );
};

export default Education;
