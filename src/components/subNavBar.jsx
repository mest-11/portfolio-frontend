import { Circle } from "lucide-react"


const SubNavBar = () => {
  return (
    <nav className="flex justify-between p-8">
    <span className="text-[25px] "><a href="/preview"><Circle className="fill-blue-400 border-blue-400"/>Monica Edem Kokovena</a></span>
    <div className="flex gap-x-[1rem] text-[20px]">
        <span><a href="/resume">Resume</a> <span className="">|</span></span>
        <span><a href="/projects">Projects </a><span className="">|</span></span>
        <span><a href="/contact">Contact</a></span>

    </div>
</nav>

  ) 
}

export default SubNavBar