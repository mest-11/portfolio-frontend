import { useNavigate } from "react-router-dom";
import PagesLayout from "../Layout/pagesLayout";
import K from "../../../constants";
import { Edit3Icon, Trash2Icon } from "lucide-react";
import { useEffect, useState } from "react";
import { apiDeleteSkill, apiGetSkills } from "../../../services/skill";
import PagesLoader from "../../../components/pagesLoader";



const Skills = () => {
  const navigate = useNavigate();
  const [skills, setSkills] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  const fetchSkills = async () => {
    setIsLoading(true)
    try {
      const res = await apiGetSkills();
      console.log(res.data);

      setSkills(res.data.Skills);

    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false)
    }
  }

  const handleDelete = async (_id) => {
    try {
      const res = await apiDeleteSkill(_id)
      console.log(res.data)
      toast.success(res.data)

    } catch (error) {
      console.log(error)
      toast.error("an error occured")

    }
  }
  useEffect(() => {
    fetchSkills()
  }, [])
  return (
    <PagesLayout headerText="Skills" buttonText="Add New Skill" onClick={() =>
      navigate("/dashboard/skills/add-skill")}>

      {
        isLoading ? <PagesLoader /> :
          <div>
            {
              Skills.length == 0 ? <p>No skill added yet</p> :
                <div className="grid grid-cols-4 gap-6">

                  {
                    Skills.map((skill, index) => (
                      
                      <div
                        key={index} className="h-40 shadow-md rounded-xl flex flex-col p-5">
                          
                        <span className="text-blue-600 animate-pulse text-center">{skill.name}</span>
                        <span className="hover:text-blue-600 text-center">{skill.levelOfProficiency}</span>

                        <div className="ml-auto flex gap-x-2">
                          <button onClick={() => handleDelete(_id)}>
                            {
                              isDeleting ? <PagesLoader /> : <Trash2Icon  className="text-blue-600 animate-bounce"/>
                          }
                          </button>

                          <button><Edit3Icon className="text-blue-600" /></button>
                        </div>
                      </div>
                    )

                    )
                  }

                </div>

            }
          </div>
      }

    </PagesLayout>
  );


}

export default Skills