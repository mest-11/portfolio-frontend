import { Circle, UserRound } from "lucide-react"
import { apiGetUserDetails } from "../services/preview";
import { useEffect, useState } from "react";
import Loader from "./loader";




const SubNavBar = () => {

  const [user, setUser] = useState({});
   
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getUser = async ()=>{
            
            try {
                setLoading(true);
                const userDetails = await apiGetUserDetails("donatus")
                
                setUser(userDetails)
                
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
    <nav className="flex justify-between p-8">
    <span className="text-[25px] "><a href="/preview"><Circle className="fill-blue-400 text-portBlue"/>{`${user.firstName} ${user.lastName}`} </a></span>
    <div className="flex gap-x-[1rem] text-[20px]">
        <span><a href="/resume">Resume</a> <span className="">|</span></span>
        <span><a href="/projects">Projects </a><span className="">|</span></span>
        <span><a href="/contact">Contact </a><span className="">|</span></span>
        <span><a href="/signup"><UserRound/> </a></span>

    </div>
</nav>

  ) 
}

export default SubNavBar