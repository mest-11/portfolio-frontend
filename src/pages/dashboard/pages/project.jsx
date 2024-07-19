import React from 'react'
import PagesLayout from '../Layout/pagesLayout'
import { useNavigate } from 'react-router-dom'
import { FolderOpenDot,} from 'lucide-react'
import { apiGetProjects } from '../../../services/projects'

const Project = () => {
  const navigate = useNavigate()
  const [project, setProjects] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  const fetchProjects = async () => {
    setIsLoading(true)
    try {
      const res = await apiGetProjects();
      console.log(res.data);

      setProjects(res.data.Projects);

    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false)
    }
  }

  const handleDelete = async (_id) => {
    try {
      const res = await apiDeleteP(_id)
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
    <PagesLayout headerText="Projects" buttonText="Add New Project" onClick={() => navigate("/dashboard/project/add-project")}>

      <div className='flex flex-col gap-y-20'>

        <div className="h-50 shadow-md rounded-xl flex flex-col p-5 bg-blue-100 box-border">

          <div className='grid grid-rows-1 w-100 '>
            <span><FolderOpenDot className='text-blue-600 animate-bounce' /></span>
            <h3 className="pb-8 pr-4 text-blue-600 text-xl text-center animate-pulse">Project 1</h3>
            <img src="" alt="Project 1" />
            <p className='text-xl text-center text-gray-800 m-2'>Lorem ipsum dolor sit amet. This is lovely Day to Contribute to the world of Web Development. Wie Ghet</p>
            <h5 className="pb-8 pr-4 hover:text-blue-600 text-center text-xl m-2">Contributors</h5>
            <h5 className="pb-8 pr-4 hover:text-blue-600 text-center text-xl m-2">Projects status</h5>

            <h5 className="pb-8 pr-4 hover:text-blue-600 text-center text-xl m-2" inputMode='download'>HomePage</h5>

          </div>

        </div>



        <div className='h-50 shadow-md rounded-xl flex flex-col p-5 bg-blue-100 box-border'>

          <div className='grid grid-rows-1 w-100 '>
            <span><FolderOpenDot className='text-blue-600 animate-pulse' /></span>

            <h3 className="pb-8 pr-4 hover:text-blue-600 text-xl text-center text-gray-800">Project 1</h3>

            <img src="" alt="Project 1" />

            <p className='text-xl text-center text-gray-800 m-2'>Lorem ipsum dolor sit amet. This is lovely Day to Contribute to the world of Web Development. Wie Ghet</p>

            <h5 className="pb-8 pr-4 hover:text-blue-600 text-center text-xl m-2">Contributors</h5>
            
            <h5 className="pb-8 pr-4 hover:text-blue-600 text-center text-xl m-2">Projects status</h5>

            <h5 className="pb-8 pr-4 hover:text-blue-600 text-center text-xl m-2" inputMode='download'>HomePage</h5>
          </div>
        </div>
      </div>

    </PagesLayout>
  )
}

export default Project