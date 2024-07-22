import React from 'react'

const AddEducation = () => {
  return (
    <div className="relative size-full min-h-screen bg-[#F8F9FB] overflow-hidden">

      <div className="flex place-content-center justify-center content-center text-center">

        <div className="flex flex-col py-10 max-w-[600px] flex-1 place-content-center border border-dotted border-blue-500 bg-blue-100">

          <h2 className="text-center place-content-center px-4 pb-3 pt-2 font-bold">Create a New Project</h2>

          <form className="border-portBlue">


            <div className='flex items-center place-content-center px-5 py-2'>
              <label htmlFor="schoolName">School Name</label>
              <input type='text' id="schoolName" name="schoolName" className='rounded-md text-center pb-5 pt-2 border-[2px] border-blue-500 h-7 m-4' placeholder='Enter Here' />

            </div>

            <div class="flex items-center place-content-center px-5 py-2">
              <label for="location">Location</label>
              <input type="text" id="location" name="proficiency" className='text-center pb-2 pt-1 focus:outline-0 focus:ring-0 border-[2px] rounded-md border-blue-500 h-7 m-2' />
            </div>

            <div class="flex items-center place-content-center px-5 py-2">
              <label for="program">Program</label>
              <input type="text" id="program" name="proficiency" className='px-4 text-center pb-2 pt-1 focus:outline-0 focus:ring-0 border-[2px] rounded-md border-blue-500 h-7 m-2' />
            </div>

            <div class="flex items-center place-content-center px-5 py-2">
              <label for="qualification">Qualification</label>
              <input type="text" id="qualification" name="proficiency" className='px-4 text-center pb-2 pt-1 focus:outline-0 focus:ring-0 border-[2px] rounded-md border-blue-500 h-7 m-2' />
            </div>

            <div class="flex items-center place-content-center px-5 py-2">
              <label for="startDate">Start Date</label>
              <input type="date" id="startDate" name="startDate" className='px-4 text-center pb-2 pt-1 focus:outline-0 focus:ring-0 border-[2px] rounded-md border-blue-500 h-7 m-2' />
            </div>

            <div class="flex items-center place-content-center px-5 py-2">
              <label for="endDate">End Date</label>
              <input type="date" id="startDate" name="startDate" className='px-4 text-center pb-2 pt-1 focus:outline-0 focus:ring-0 border-[2px] rounded-md border-blue-500 h-7 m-2' />
            </div>

            <button type="submit" className="animate-bounce rounded-md px-4 text-center pb-5 pt-1 focus:outline-0 focus:ring-0 border-[2px] border-blue-500 h-5 m-2 hover:bg-white"> Create </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddEducation