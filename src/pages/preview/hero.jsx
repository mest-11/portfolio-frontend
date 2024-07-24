import SubNavBar from "../../components/subNavBar"
import MyImg from "../../assets/images/myImg2.jpeg"
import SubFooter from "../../components/subFooter"
import { apiGetUserDetails } from "../../services/preview"
import { useEffect, useState } from "react"

const Hero = () => {
    const [user, setUser] = useState({});

    const getUser = async () => {
        const userDetails = await apiGetUserDetails("donatus")

        setUser(userDetails)

        console.log("userprofile", userDetails)
        console.log("user", userDetails)

    }


    getUser()


    useEffect(() => {
       
    })

    if (!user) {
        return "null"
    }


    return (
        <div className="bg-[#F3F3F3]">
            <SubNavBar />


            <section >
                <div className="flex justify-center items-center gap-x-5 px-[5rem] py-[8rem]">
                    <img src={MyImg} alt="user image" className="h-[25rem] w-[25rem] rounded-full  border-r-1 slide-in-top" />
                    <div className="flex flex-col justify-center w-[50%] slide-in-bottom">
                        <span className="text-[5rem] antialiased font">Hello</span>
                        <span className="text-[22px] font-medium antialiased">About me</span>
                        <span className="text-[20px] antialiased">{user.userProfile?.about}
                        </span>



                        <div className="flex gap-y-10 gap-x-5 p-10 text-[20px]  ">
                            <div className="size-[8rem] rounded-full bg-portBlue border-r-1 flex justify-center items-center hover:bg-white font-medium"><a href="/resume">Resume</a> </div>
                            <div className="size-[8rem] rounded-full bg-orange-300 border-r-1 flex justify-center items-center hover:bg-white font-medium"><a href="/projects">Projects</a></div>
                            <div className="size-[8rem] rounded-full bg-black border-r-1 flex justify-center items-center text-white hover:bg-white hover:text-black font-medium" ><a href="/contact">Contact</a></div>

                        </div>

                    </div>

                </div>
                <SubFooter />


            </section>
        </div>

    )
}

export default Hero