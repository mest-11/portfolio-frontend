import { Circle, UserCog, UserRound } from "lucide-react"


const SubNavBar = () => {
  return (
    <nav className="flex justify-between p-8">
    <span className="text-[25px] "><a href="/preview"><Circle className="fill-blue-400 text-portBlue"/>Monica Edem Kokovena</a></span>
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