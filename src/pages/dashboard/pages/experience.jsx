import { useNavigate } from "react-router-dom"
import PagesLayout from "../Layout/pagesLayout"
import { apiDeleteExperiences, apiGetExperiences } from "../../../services/experiences";
import PagesLoader from "../../../components/pagesLoader";
import { useEffect, useState } from "react";
import { Edit2Icon, Trash2Icon } from "lucide-react";
import Loader from "../../../components/loader";



const Experience = () => {
  const navigate = useNavigate();
  const [experiences, setExperiences] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [deletingItems, setDeletingItems] = useState(false);

  const fetchExperiences = async () => {
    setIsLoading(true);
    try {
      const res = await apiGetExperiences();
      console.log(res.data);
      setExperiences(res.data.Experiences);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (_id) => {
    setDeletingItems((prev) => ({ ...prev, [_id]: true }));
    try {
      const res = await apiDeleteExperiences(_id);
      console.log(res.data);
      toast.success(res.data.message);
    } catch (error) {
      console.log(error)
      toast.error("an error occured")
    }finally{
      setDeletingItems((prev) => ({ ...prev, [_id]: false }));
    }
  }
  useEffect(() => {
    fetchExperiences();
  }, []);
  return (
    <PagesLayout headerText="Experience" buttonText="Add New Experience" onClick={() =>
      navigate("/dashboard/experience/add-experience")}>
      {
        isLoading ? ( 
        <PagesLoader /> 
      ): (
          <div>
            {
              Experience.length == 0 ? ( <p>No Experience added yet</p> 
              ) : (
                <div className="grid grid-cols-4 gap-6">

                  {
                    Experience.map((experience, index) => (
                      <div
                        key={index}
                        className="h-40 shadow-md rounded-xl flex flex-col p-5">

                        <span className="text-blue-600 text-center">{experience.name}</span>
                        <span className="hover:text-blue-600 text-center">{experience.description}</span>
                        <span className="text-blue-600 text-center">{experience.date}</span>

                        <div className="ml-auto flex gap-x-2">
                        <button onClick={() => handleDelete(_id)} 
                      className="text-blue-600 animate-bounce">
                        {deletingItems[_id] ? <Loader /> : <Trash2Icon  />}
                      </button>

                          <button><Edit2Icon className="text-blue-600 animate-bounce" /></button>
                        </div>
                      </div>

                    ))}
                </div>
            )}
          </div>
      )}
    </PagesLayout>
  )
}

export default Experience