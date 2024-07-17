import React from 'react'
import PagesLayout from '../Layout/pagesLayout'
import { useNavigate } from 'react-router-dom'
import { FolderOpenDot, ScrollText } from 'lucide-react'

const Projects = () => {
  const navigate = useNavigate()
  return (
    <PagesLayout headerText="Projects" buttonText="Add New Project" onClick={() => navigate("/dashboard/project/add-project")}>

      <div className='flex flex-col gap-y-20'>
        <div className="h-200 shadow-md rounded-xl fle flex-col p-5">
          <div className='grid grid-rows-1 w-100'>
            <span><FolderOpenDot className='text-blue-600' /></span>
            <h3 className="pb-8 pr-4 hover:text-blue-600">Project 1</h3>
            <img src="" alt="Project 1" />
            <p>Lorem ipsum dolor sit amet.</p>
            <h3 className="pb-8 pr-4 hover:text-blue-600">Contributors</h3>


          </div>
        </div>

        <div>

          <div className="h-40 shadow-md rounded-xl fle flex-col p-5">
            <span><FolderOpenDot /> </span>
            <span className=''>Project Name</span>
          </div>
        </div>

      </div>

    </PagesLayout>
  )
}

export default Projects