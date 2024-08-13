import EducationCard from "../../components/educationCard";

const Education = ({ education }) => {
  return (
    <div className=" px-36 pt-5 justify-center scale-up-center items-center pb-20 bg-[#F3F3F3] m-10 rounded-lg">
       
        <div className="flex flex-col justify-center items-center">
          
            <span className="text-[22px] font-medium pb-10 pt-8 ">
              Education
            </span>
        </div>

        <div className="flex flex-col gap-y-10">
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
   

  );
};

export default Education;
