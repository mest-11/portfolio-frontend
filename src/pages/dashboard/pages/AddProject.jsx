import React from 'react'

const AddProject = () => {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#F8F9FB] overflow-hidden">

      <div className="bg-[#F8F9FB] flex box-border place-content-center text-center">
        <div className="layout-content-container flex flex-col w-[52px] py-2 max-w-[600px] flex-1 place-content-center border border-box border-50 border-blue-500 bg-inherit bg-blue-100">
          <h2 className="text-center place-content-center px-4 pb-3 pt-5">Create a New Project</h2>

          <form className="border-portBlue">

            <div className="">
              <label htmlFor='Image'>Upload Image</label>
              <input type='file' id=''  className='px-4 text-center pb-10 pt-2 focus:outline-0 focus:ring-0 border-[2px] border-blue-500 h-10 rounded-md m-4 animate-pulse'/>
            </div>

            <div class="">
              <label for="projectName">Project Name</label>
              <input type="text" id="projectName" name="projectName" className='px-4 text-center pb-2 pt-1 focus:outline-0 focus:ring-0 border-[2px] rounded-md border-blue-500 h-7 m-2' placeholder='Enter Project Name' />
            </div>

            <div class="">
              <label htmlfor="projectDescription">Project Description</label>
              <textarea id="projectDescription" name="projectDescription" className='px-4 rounded-md text-center pb-5 pt-2 focus:outline-0 focus:ring-0 border-[2px] border-blue-500 h-10 m-4' placeholder='Text Here'/>
            </div>

            <div>
              <label htmlFor='Contributors'>Contributors</label>
              <input type='text' placeholder='Enter Contributors here' className='px-4 text-center pb-2 pt-1 focus:outline-0 focus:ring-0 border-[2px] rounded-md border-blue-500 h-7 m-2'/>
            </div>


            <div class="">
              <label for="projectStatus">Project Status</label>
              <select id="projectStatus" name="projectStatus" className='px-4 text-center pb-2 pt-1 focus:outline-0 focus:ring-0 border-[2px] rounded-md border-blue-500 h-7 m-2'>
                <option value=""></option>
                <option value="not_started">Not Started</option>
                <option value="in_progress">In Progress</option>
                <option value="completed">Completed</option>
              </select>
            </div>

            <div>
              <label htmlFor="skills">Skills</label>
              <input type='text' className='px-4 text-center pb-2 pt-1 focus:outline-0 focus:ring-0 border-[2px] rounded-md border-blue-500 h-7 m-2' placeholder=" Enter your skills"/>

            </div>

            <div>
              <label for="homepage">Add your homepage:</label>
              <input type="url" id="homepage" name="homepage" className='px-4 text-center pb-2 pt-1 focus:outline-0 focus:ring-0 border-[2px] rounded-md border-blue-500 h-7 m-2'placeholder='Enter your Link' />
            </div>

            <div>
              <label htmlFor="Organisation">Organisation</label>
              <input type='text' className='px-4 text-center pb-2 pt-1 focus:outline-0 focus:ring-0 border-[2px] rounded-md border-blue-500 h-7 m-2' placeholder="Enter the Organisation" />

            </div>

            <div class="">
              <label for="startDate">Start Date</label>
              <input type="date" id="startDate" name="startDate" className='px-4 text-center pb-2 pt-1 focus:outline-0 focus:ring-0 border-[2px] rounded-md border-blue-500 h-7 m-2' />
            </div>

            <div class="">
              <label for="endDate">End Date</label>
              <input type="date" id="endDate" name="endDate" className='px-4 text-center pb-2 pt-1 focus:outline-0 focus:ring-0 border-[2px] rounded-md border-blue-500 h-7 m-2' />
            </div>


            <button type="submit" className="animate-bounce rounded-md px-4 text-center pb-5 pt-1 focus:outline-0 focus:ring-0 border-[2px] border-blue-500 h-5 m-2 hover:bg-white">Create Project</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddProject