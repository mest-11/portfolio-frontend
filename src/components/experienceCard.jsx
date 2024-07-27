

const ExperienceCard = ({role, companyName, skills, startDate, endDate}) => {


  return (
    <div> <div className=" flex gap-x-10">
    <span className="w-[300px]">{startDate}  -  {endDate}</span>

    <div className="flex flex-col">
        <span className="font-medium text-[16px]">{role} | {companyName}</span>
        <p> {skills}
</p>
    </div>
     

    </div>
</div>
  )
}

export default ExperienceCard