const ExperienceCard = ({ role, companyName, responsibilities, skills, startDate, endDate }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-start gap-x-5 px-4 sm:px-8 py-4">
      <div className="w-full md:w-[200px] text-sm md:text-base mb-2 md:mb-0 flex-shrink-0">
        <span>
          {startDate} - {endDate}
        </span>
      </div>

      <div className="flex flex-col w-full">
        <span className="font-medium text-[14px] md:text-[16px]">
          {role} | {companyName}
        </span>
        <ul className="list-disc pl-5 mt-2 text-sm md:text-base">
          {responsibilities.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul>
        <p className="text-sm md:text-base mt-1">{skills}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
