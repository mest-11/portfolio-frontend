import { useNavigate } from "react-router-dom";
import PagesLayout from "../Layout/pagesLayout";
import K from "../../../constants";
import { Edit3Icon, Trash2Icon } from "lucide-react";



const Skills = () => {
  const navigate = useNavigate()
  return (
    <PagesLayout headerText="Skills" buttonText="Add New Skill" onClick={() => 
    navigate("/dashboard/skills/add-skill")}>

      <div className="grid grid-cols-2 gap-6">
        
         {
          K.SKILLS.map((skill,index )=> (
            <div 
            key={index} className="h-40 shadow-md rounded-xl flex flex-col p-5">
              <span className="text-blue-600 animate-pulse text-center">{skill.name}</span>
              <span className="hover:text-blue-600 text-center">{skill.levelOfProficiency}</span>
              <span></span>

              <div className="ml-auto flex gap-x-2">
                <span><Trash2Icon className="text-blue-600 animate-bounce"/></span>

                <span><Edit3Icon className="text-blue-600 animate-bounce"/></span>
              </div>
            </div>
          )

          )
         }

         

          
        
        
      </div>
      
    </PagesLayout>
  );


}

export default Skills