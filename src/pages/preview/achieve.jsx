import AchieveCard from "../../components/achieveCard";

const Achieve = ({ achievements }) => {
  return (
    <div className=" flex flex-col justify-center">
      <span className="text-[22px] font-medium px-36 py-10 ">
        Certification
      </span>

      <div className="flex flex-wrap justify-center">
        {achievements?.map((achievement) => (
          <AchieveCard
            award={achievement.award}
            date={achievement.date}
            image={`https://savefiles.org/${achievement?.image}?shareable_link=307`}
            nameOfOrganisation={achievement.nameOfOrganisation}
            description={achievement.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Achieve;
