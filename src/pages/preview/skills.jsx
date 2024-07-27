import { useEffect, useState } from "react";
import CircularSkill from "../../components/skillsMeasure";
import { apiGetUserDetails } from "../../services/preview";
import Loader from "../../components/loader";

const Skills = () => {
    const [user, setUser] = useState({});
   
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getUser = async ()=>{
            
            try {
                setLoading(true);
                const userDetails = await apiGetUserDetails("donatus")
                
                setUser(userDetails.skills)
                
            } catch (error) {
                console.error('Error fetching data:', error);
                
            } finally{
                setLoading(false);
            }
        }

        getUser();
    }, []);

    if (loading){
        return <Loader/>;
    }

 

  return (
    <div>
      <div className="flex flex-col gap-y-10 px-36 p-20 justify-center scale-up-center">
        <h1 className="font-bold antialiased text-[2rem]">Resume</h1>
        <div className="flex">
          <div className="w-1/2">
            <span className="text-[22px] font-medium pb-20">Skills <br />
              & Expertise</span>
          </div>

          <div className="flex flex-row-4 flex-wrap gap-x-10 gap-y-5 w-1/2">
            <div className="grid grid-cols-3 gap-8 antialiased">
              {user.map((skills)=>(<CircularSkill name={skills.name} levelOfProficiency={skills.levelOfProficiency} />))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
