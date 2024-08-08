import React, { useState } from 'react'
import PagesLayout from '../Layout/pagesLayout'
import { useNavigate } from 'react-router-dom'
import { FolderOpenDot, Trash2Icon, } from 'lucide-react'
import PagesLoader from '../../../components/pagesLoader'
import { apiDeleteProjects, apiGetProjects } from '../../../services/projects'
import Loader from '../../../components/loader'

const Project = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [deletingItems, setDeletingItems] = useState({});

  const fetchProjects = async () => {
    setIsLoading(true);
    try {
      const res = await apiGetProjects();
      console.log(res.data);
      setProjects(res.data.Projects);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (_id) => {
    setDeletingItems((prev) => ({ ...prev, [_id]: true }));
    try {
      const res = await apiDeleteProjects(_id);
      console.log(res.data);
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
      toast.error("An error occured");
    } finally {
      setDeletingItems((prev) => ({ ...prev, [_id]: false }));
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <PagesLayout headerText="Projects" buttonText="Add New Project" onClick={() => navigate("/dashboard/project/add-project")}>

      {
        isLoading ? ( <PagesLoader /> )
        :(
          <div className='flex flex-col gap-y-20'>
            {
              Project.length == 0 ? ( <p>No Project added yet</p> ) : (
                <div className="h-50 shadow-md rounded-xl flex flex-row p-5 bg-blue-100 box-border">

                  {
                    Project.map((project, index) => (
                      <div
                        key={index}
                        className='grid grid-rows-2 w-100 '>

                        <span><FolderOpenDot className='text-blue-600 animate-bounce' /></span>
                        <span className="pb-8 pr-4 text-blue-600 text-xl text-center animate-pulse">{project.name}</span>
                        <img src="" alt="Project 1" />
                        <span className='text-xl text-center text-gray-800 m-2'>{project.desription}</span>
                        <h5 className="pb-8 pr-4 hover:text-blue-600 text-center text-xl m-2">{project.contributors}</h5>
                        <h5 className="pb-8 pr-4 hover:text-blue-600 text-center text-xl m-2">{project.status}</h5>

                        <h5 className="pb-8 pr-4 hover:text-blue-600 text-center text-xl m-2" inputMode='download'>{projects.link}</h5>


                        <div className="ml-auto flex gap-x-2">
                        <button onClick={() => handleDelete(_id)} 
                      className="text-blue-600 animate-bounce">
                        {deletingItems[_id] ? <Loader /> : <Trash2Icon  />}
                      </button>

                          <button><Edit3Icon className="text-blue-600" /></button>
                        </div>
                      </div>
                    ))}
                </div>
            )}
          </div>
      )}
    </PagesLayout >
  );
};

export default Project