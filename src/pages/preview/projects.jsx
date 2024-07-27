import { useEffect, useState } from "react";
import ProjectsCard from "../../components/projectsCard"
import SubFooter from "../../components/subFooter"
import SubNavBar from "../../components/subNavBar"
import { apiGetUserDetails } from "../../services/preview";
import Loader from "../../components/loader";

const Projects = () => {
  const [user, setUser] = useState({});
   
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getUser = async ()=>{
            
            try {
                setLoading(true);
                const userDetails = await apiGetUserDetails("donatus")
                
                setUser(userDetails.experiences)
                
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
    <div className="bg-[#F3F3F3]">
      <SubNavBar />

      <div  className="flex flex-col px-36 py-20">

      <span className=" text-[2rem] font-bold antialiased pb-20 ">
        Projects
      </span>

      <div className="flex-flex-col justify-center ">
      <ProjectsCard/>
     
      </div>

      </div>
      <SubFooter/>


    </div>




  )
}

export default Projects