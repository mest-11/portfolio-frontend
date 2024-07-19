import ExperienceCard from "../../components/experienceCard"


const Experience = () => {
    return (
        <div className=" flex flex-col px-28 py-10 gap-y-10">

     
            <div className=" flex">
                <div className="w-1/4">
                <span className="text-[22px] font-medium">Work <br />
                Experience</span>

                </div>

                <div className="flex flex-col gap-y-10 w-3/4"> 
                <ExperienceCard />
                <ExperienceCard/>
                <ExperienceCard/>
                {/* <ExperienceCard/>
                <ExperienceCard/> */}

                
                </div>


              
            </div>




        </div>


    )
}

export default Experience