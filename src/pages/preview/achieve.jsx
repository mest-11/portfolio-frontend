import AchieveCard from "../../components/achieveCard"

const Achieve = () => {
  return (
    <div className=" flex flex-col justify-center">
      <span className="text-[22px] font-medium px-36 py-10 ">Certification
        </span>

        <div className="flex flex-wrap justify-center">

      <AchieveCard/>
      <AchieveCard/>
      <AchieveCard/>
      <AchieveCard/>
      <AchieveCard/>

      </div>
     
        
        </div>

  )
}

export default Achieve