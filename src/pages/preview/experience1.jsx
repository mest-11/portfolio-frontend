import ExperienceCard from "../../components/experienceCard";

const Experience = ({ experiences }) => {
  // Helper function to parse "MM/YYYY" into a Date object
  const parseDate = (dateStr) => {
    const [month, year] = dateStr.split("/").map(Number);
    return new Date(year, month - 1); // Subtract 1 from month because Date months are 0-indexed
  };

  // Sort experiences by endDate in descending order (newest first)
  const sortedExperiences = experiences?.sort((a, b) => {
    const dateA = parseDate(a.endDate);
    const dateB = parseDate(b.endDate);

    return dateB - dateA; // Descending order
  });

  return (
    <div className="px-4 sm:px-8 md:px-20 lg:px-36 py-5 bg-[#F3F3F3] mx-4 md:mx-10 my-10 rounded-lg">
      <div className="flex flex-col justify-center items-center">
        <span className="text-[20px] sm:text-[22px] font-medium pb-8 pt-6">
          Work Experience
        </span>
      </div>

      <div className="flex flex-col gap-y-6 md:gap-y-10">
        {sortedExperiences?.map((experience, index) => (
          <ExperienceCard
            key={index}
            role={experience.role}
            companyName={experience.companyName}
            responsibilities={experience.responsibility}
            skills={experience.skills}
            startDate={experience.startDate}
            endDate={experience.endDate}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
