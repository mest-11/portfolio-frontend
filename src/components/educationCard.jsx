
const EducationCard = ({startDate, endDate, program, schoolName}) => {
   
    return (
        <div> <div className=" flex gap-x-5 pl-20">
            <span className="w-[200px]">{startDate}  -  {endDate}</span>
            <span className="font-medium text-[16px] ">{schoolName} | {program}</span>


        </div>
        </div>

    )
}

export default EducationCard