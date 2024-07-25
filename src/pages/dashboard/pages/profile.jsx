import React from 'react'
import PagesLayout from '../Layout/pagesLayout'
import { useNavigate } from 'react-router-dom'

const Profile = () => {

  return (
    <PagesLayout headerText="Profile" buttonText="Add Profile" onClick={() =>
      navigate("/dashboard/profile/add-profile")}>
        <div className=''>
      <div className="flex m">
        <div>
          <span className="p-20 bg-portBlue text-blue rounded-full shadow-md">
          </span>
        </div>
      </div>


      <div className='flex'>
        <div className=' mb-5 mt-2 pt-3 flex-row'>
          <h2 typeof='text' aria-placeholder='text' className='font-semibold text-3xl' placehold>About</h2>
        </div>
        <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis dolor id ligula semper elementum feugiat pretium nulla. Nunc non commodo dolor.</p>
          <span className='font-semibold text-3xl'>ProfilePicture</span >
        </div>
      </div>
      </div>

    </PagesLayout>
  )
}

export default Profile