import { useNavigate } from "react-router-dom";
import PagesLayout from "../Layout/pagesLayout";

const Skills = () => {
  const navigate = useNavigate()
  return (
    <PagesLayout headerText="Skills" buttonText="Add New Skill" onClick={() => 
    navigate("/dashboard/skills/add-skill")}>
      
      <div>
        
      </div>
      <span>All Skills here</span>
    </PagesLayout>
  );


}

export default Skills