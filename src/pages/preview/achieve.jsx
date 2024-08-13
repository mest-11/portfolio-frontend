import AchieveCard from "../../components/achieveCard";

const Achieve = ({ achievements }) => {
  return (
    <div className=" px-36 pt-5 justify-center scale-up-center items-center pb-20 bg-[#F3F3F3] m-10 rounded-lg">
       
    <div className="flex flex-col justify-center items-center">
      
        <span className="text-[22px] font-medium pb-10 pt-8 ">
          Certification
        </span>
      <div className="flex flex-wrap justify-center gap-2">
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
    </div>
  );
};

export default Achieve;
