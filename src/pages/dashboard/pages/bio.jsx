import React from 'react'
import PagesLayout from '../Layout/pagesLayout'
import { useNavigate } from 'react-router-dom'

const Bio = () => {
  const navigate = useNavigate()
  const [skills, setBio] = useState([])
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
    <PagesLayout headerText="Bio" buttonText="Add Bio" onClick={() => 
      navigate("/dashboard/bio/add-bio")}>
      <div className="display block">
        <div>
          
        </div>
        <h2 typeof='text' aria-placeholder='text' className='font-semibold text-3xl' placehold>Bio</h2>
      <span className='font-semibold text-3xl'>ProfilePicture</span></div>
      
    </PagesLayout>
  )
}

export default Bio