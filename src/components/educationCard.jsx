
const EducationCard = ({startDate, endDate, program, schoolName}) => {
   
    return (
        <div> <div className=" flex gap-x-10">
            <span className="w-[300px]">{startDate}  -  {endDate}</span>
            <span className="font-medium text-[16px] ">{schoolName} | {program}</span>


        </div>
        </div>

    )
}

export default EducationCard