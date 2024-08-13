const ExperienceCard = ({ role, companyName, skills, startDate, endDate }) => {
  return (
    <div className=" flex gap-x-5 pl-20">
      <span className="w-[200px]">
        {startDate} - {endDate}
      </span>

      <div className="flex flex-col">
        <span className="font-medium text-[16px]">
          {role} | {companyName}
        </span>
        <p> {skills}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
