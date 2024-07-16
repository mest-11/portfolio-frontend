import React from 'react'
import PagesLayout from '../Layout/pagesLayout'

const Projects = () => {
  return (
    <PagesLayout headerText="Projects" buttonText="Add New Project" onClick={() => 
      navigate("/dashboard/project/add-project")}>
        
        <div>
          
        </div>
        <span>Projects</span>
      </PagesLayout>
  )
}

export default Projects