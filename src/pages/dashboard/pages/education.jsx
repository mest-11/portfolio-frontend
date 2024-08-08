import { useNavigate } from "react-router-dom"
import PagesLayout from "../Layout/pagesLayout"
import K from "../../../constants"
import { Edit2Icon, Trash2Icon } from "lucide-react"
import { useEffect, useState } from "react"
import { apiDeleteEducation, apiGetEducation } from "../../../services/education"
import Loader from "../../../components/loader"


const Education = () => {
  const navigate = useNavigate();
  const [education, setEducation] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [deletingItems, setDeletingItems] = useState(false);

  const fetchEducation = async () => {
    setIsLoading(true);
    try {
      const res = await apiGetEducation();
      console.log(res.data);
      setEducation(res.data.Education);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false)
    }
  };

  const handleDelete = async (_id) => {
    setDeletingItems((prev) => ({ ...prev, [_id]: true }));
    try {
      const res = await apiDeleteEducation(_id);
      console.log(res.data);
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
      toast.error("an error occured");
    }finally{
      setDeletingItems((prev) => ({ ...prev, [_id]: false }));
    }
  }
  useEffect(() => {
    fetchEducation()
  }, []);

  return (
    <PagesLayout headerText="Education" buttonText="Add New Education" onClick={() =>
      navigate("/dashboard/education/add-education")}>

      { isLoading ? ( <PagesLoader /> ) : (
          <div>
            { Education.length == 0 ? ( <p>No Education added yet</p> ): (
                <div className="grid grid-cols-4 gap-6">
                  {
                    Education.map((education, index) => (
                      <div
                        key={index}
                        className="h-40 shadow-md rounded-xl flex flex-col p-5">
                        <span className="text-blue-600 text-center">{education.name}</span>
                        <span className="hover:text-blue-600 text-center">{education.description}</span>
                        <span className="text-blue-600 text-center">{education.date}</span>

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
  );


}
export default Education