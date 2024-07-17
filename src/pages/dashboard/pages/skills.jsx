import { useNavigate } from "react-router-dom";
import PagesLayout from "../Layout/pagesLayout";
import K from "../../../constants";
import { Edit3Icon, Trash2Icon } from "lucide-react";



const Skills = () => {
  const navigate = useNavigate()
  return (
    <PagesLayout headerText="Skills" buttonText="Add New Skill" onClick={(onClick) => 
    navigate("/dashboard/skills/add-skill")}>

      <div className="grid grid-cols-4 gap-6">
        
         {
          K.SKILLS.map((skill,index )=> (
            <div 
            key={index} className="h-40 shadow-md rounded-xl flex flex-col p-5">
              <span>{skill.name}</span>
              <span>{skill.levelOfProficiency}</span>

              <div className="ml-auto flex gap-x-2">
                <span><Trash2Icon className="text-blue-600"/></span>

                <span><Edit3Icon className="text-blue-600"/></span>
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