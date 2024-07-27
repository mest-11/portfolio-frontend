import { Mail, Phone } from "lucide-react"
import Git from "./git"
import LinkedIn from "./linkedIn"
import DownloadRsesume from "./downloadRsesume"
import { apiGetUserDetails } from "../services/preview"
import { useEffect, useState } from "react"
import Loader from "./loader"


const SubFooter = () => {
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
        <div>


            <div className="bg-slate-300 h-[0.5px] w-full shadow-lg shadow-slate-350 "></div>
            <div className="flex gap-x-20 py-10 px-20 justify-center items-center">
                <div className="flex flex-col w-[300px]">
                    <span><Phone /></span>
                    <span>{user.userProfile?.contact}</span>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <span> <Mail />  </span>
                    <a href="mailto:monicaekokovena@gmail.com">{user.email}</a>
                </div>
                <div className="flex gap-x-6 justify-center items-center">
                <a href={`https://${user.userProfile?.gitHubLink}`} target="_blank" rel="noopener noreferrer"><Git /></a>
                <a href={`https://${user.userProfile?.linkedInLink}`} target="_blank" rel="noopener noreferrer"><LinkedIn /></a>

                </div>

                <DownloadRsesume/>

                <div className="pt-8 w-[600px]">
                    <span>All rights reserved to @ Monica, Donatus, Caroline & Kezia</span>

                </div>



            </div>
        </div>
    )
}

export default SubFooter