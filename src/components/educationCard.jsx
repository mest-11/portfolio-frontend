const EducationCard = ({ startDate, endDate, program, schoolName }) => {
    return (
      <div className="px-4 py-2 md:px-6">
        <div className="flex flex-col md:flex-row md:gap-x-5">
          <span className="block md:inline w-full md:w-[200px] text-sm md:text-base">
            {startDate} - {endDate}
          </span>
          <span className="font-medium text-[14px] md:text-[16px] mt-2 md:mt-0">
            {schoolName} | {program}
          </span>
        </div>
      </div>
    );
  };
  
  export default EducationCard;
  