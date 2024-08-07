import React from 'react'
import PagesLayout from '../Layout/pagesLayout'
import { useNavigate } from 'react-router-dom'

const Bio = () => {
  const navigate = useNavigate()
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