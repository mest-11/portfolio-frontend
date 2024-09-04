const AchieveCard = ({ description, image, date, nameOfOrganisation }) => {
  return (
      <div className=" flex flex-col gap-x-10 gap-y-3 flex-wrap p-5 ">
        <span className="w-[200px] font-medium pl-16">{date}</span>
        <img
          src={image}
          alt="cert img"
          className="w-[15rem] h-[10rem] rounded-[5px]"
        />
        <span className="font-medium w-[70%]">{nameOfOrganisation}</span>
        <p className="w-[15rem]">{description}</p>
      </div>
  );
};

export default AchieveCard;
