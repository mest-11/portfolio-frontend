import React from 'react'
import PagesLayout from '../Layout/pagesLayout'

const AddAchievement = () => {
  return (
  
    <div className="relative flex size-full min-h-screen flex-col bg-[#F8F9FB] overflow-hidden">
    <div className="bg-[#F8F9FB] flex box-border place-content-center text-center">

        <div className="layout-content-container flex flex-col w-[52px] py-2 max-w-[600px] flex-1 place-content-center border border-box border-50 border-blue-500 bg-inherit bg-blue-100">

        <h2 className="text-center place-content-center px-4 pb-3 pt-5">Create a New Achievement</h2>
      <h2>Add New Achievement</h2>
      <form>
        <label htmlFor='awards'> Awards</label>
        <input type="text" />

        <label>
          Description:
          <textarea
            placeholder=''
            rows={4} />
        </label>
        <button type="submit">Submit</button>
      </form>
      </div>
      </div>
      </div>
  )
}

export default AddAchievement