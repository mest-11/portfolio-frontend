const ExperienceCard = ({ role, companyName, skills, startDate, endDate }) => {
  return (
    <div className="flex flex-col md:flex-row gap-x-5 px-4 sm:px-8 py-4">
      <span className="block md:inline w-full md:w-[200px] text-sm md:text-base mb-2 md:mb-0">
        {startDate} - {endDate}
      </span>

      <div className="flex flex-col">
        <span className="font-medium text-[14px] md:text-[16px]">
          {role} | {companyName}
        </span>
        <p className="text-sm md:text-base mt-1">{skills}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
