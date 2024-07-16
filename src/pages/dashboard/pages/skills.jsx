import { useNavigate } from "react-router-dom";
import PagesLayout from "../Layout/pagesLayout";
import K from "../../../constants";


const Skills = () => {
  const navigate = useNavigate()
  return (
    <PagesLayout headerText="Skills" buttonText="Add New Skill" onClick={() => 
    navigate("/dashboard/skills/add-skill")}>

      <div className="grid grid-cols-4 gap-6">
        
         

         

          
        
        
      </div>
      <span>All Skills here</span>
    </PagesLayout>
  );


}

export default Skills