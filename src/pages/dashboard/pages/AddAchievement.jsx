import React from 'react'
import PagesLayout from '../Layout/pagesLayout'

const AddAchievement = () => {
  return (

    <div className="relative flex size-full min-h-screen flex-col bg-[#F8F9FB] overflow-hidden">
      <div className="flex place-content-center py-40  box-border shadow-md">

        <div className="flex flex-col py-8 max-w-[400px] flex-1 place-content-center  text-center border border-dotted border-blue-500 bg-blue-300">

          <h2 className="text-center place-content-center px-4 pb-3 pt-2 font-bold">Create a New Achievement</h2>


          <form>
            <div className="flex items-center place-content-center px-5 py-2">
              <label htmlFor='awards' className="flex text-[#141C24] font-semibold pb-2"> Awards</label>
              <input type="text"  className='px-4 text-center pb-2 pt-1 focus:outline-0 focus:ring-0 border-[2px] rounded-md border-blue-500 h-7 m-2'/>
            </div>

            <div className="flex items-center place-content-center px-5 py-2">
            <label className="flex text-[#141C24] font-medium pb-5 pt-2">
              Description
              <textarea
                placeholder='Enter Here'
                rows={4} className='px-4 rounded-md text-center pb-5 pt-2 border-[2px] border-blue-500 h-10 m-4'id="description" name="description"/>
            </label>
            </div>
            <button type="submit" className="animate-bounce rounded-md px-2 text-center pb-5 pt-1 focus:outline-0 focus:ring-0 border-[2px] bg-orange-200 border-blue-500 h-5 m-5 hover:bg-white">Submit</button>
          
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddAchievement