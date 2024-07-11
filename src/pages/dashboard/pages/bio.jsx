import React from 'react'
import PagesLayout from '../Layout/pagesLayout'

const Bio = () => {
  return (
    <PagesLayout headerText="Bio" buttonText="Add Bio">
      <div className="display block">
        <h2 typeof='text' aria-placeholder='text' className='font-semibold text-3xl'>Bio</h2>
      <span className='font-semibold text-3xl'>ProfilePicture</span></div>
      
    </PagesLayout>
  )
}

export default Bio