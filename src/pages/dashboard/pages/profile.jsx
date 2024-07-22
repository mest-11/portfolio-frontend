import React from 'react'
import PagesLayout from '../Layout/pagesLayout'
import { useNavigate } from 'react-router-dom'

const Profile = () => {

  return (
    <PagesLayout headerText="Profile" buttonText="Add Profile" onClick={() => 
      navigate("/dashboard/profile/add-profile")}>
      <div className="display block">
        <div>
          
        </div>
        <h2 typeof='text' aria-placeholder='text' className='font-semibold text-3xl' placehold>Bio</h2>
      <span className='font-semibold text-3xl'>ProfilePicture</span></div>
      
    </PagesLayout>
  )
}

export default Profile