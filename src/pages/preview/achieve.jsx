import { useEffect, useState } from "react";
import AchieveCard from "../../components/achieveCard"
import Loader from "../../components/loader";
import { apiGetUserDetails } from "../../services/preview";

const Achieve = () => {
  const [user, setUser] = useState({});
   
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      const getUser = async ()=>{
          
          try {
              setLoading(true);
              const userDetails = await apiGetUserDetails("donatus")
              
              setUser(userDetails.achievements)
              
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
    <div className=" flex flex-col justify-center">
      <span className="text-[22px] font-medium px-36 py-10 ">Certification
        </span>

        <div className="flex flex-wrap justify-center">
      {user.map((achievements)=>(<AchieveCard award={achievements.award} date={achievements.date} image={achievements.image} nameOfOrganisation={achievements.nameOfOrganisation} description={achievements.description}/>))}
        

      </div>
     
        
        </div>

  )
}

export default Achieve