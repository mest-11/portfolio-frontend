
const EducationCard = ({startDate, endDate, program, schoolName}) => {
   
    return (
        <div> <div className=" flex gap-x-[0.5rem]">
            <div className="w-[200px]">{startDate}  -  {endDate}</div>
            <div className="font-medium text-[16px] w-[600px]">{schoolName} | {program}</div>


        </div>
        </div>

    )
}

export default EducationCard