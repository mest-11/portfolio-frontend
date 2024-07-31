import React, { useEffect, useState } from 'react'
import EducationCard from '../../components/educationCard'
import { apiGetUserDetails } from '../../services/preview';
import Loader from '../../components/loader';

const Education = () => {

  const [user, setUser] = useState({});
   
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      const getUser = async ()=>{
          
          try {
              setLoading(true);
              const userDetails = await apiGetUserDetails("donatus")
              
              setUser(userDetails.education)
              
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
    <div className=" flex flex-col px-36 py-10 gap-y-10">

    <div className=" flex">
        <div className="w-1/4">
        <span className="text-[22px] font-medium">Education
        </span>

        </div>

        <div className="flex flex-col gap-y-10 w-3/4"> 
        {user.map((education)=>(<EducationCard schoolName={education.schoolName} program={education.program} startDate={education.startDate} endDate={education.endDate} />))}
        
     
        
        </div>


      
    </div>




</div>
  )
}

export default Education