import React from 'react'

const AddEducation = () => {
  return (
    <div>
      <form className="border-portBlue">

          
<div>
  <label htmlFor="skills">Skills</label>
  <textarea id="projectDescription" name="projectDescription" className='px-4 rounded-md text-center pb-5 pt-2 focus:outline-0 focus:ring-0 border-[2px] border-blue-500 h-10 m-4' placeholder='Enter Skills'/>

</div>

<div class="">
  <label for="projectName">Institution</label>
  <input type="text" id="proficiency" name="proficiency" className='px-4 text-center pb-2 pt-1 focus:outline-0 focus:ring-0 border-[2px] rounded-md border-blue-500 h-7 m-2' />
</div>


<button type="submit" className="animate-bounce rounded-md px-4 text-center pb-5 pt-1 focus:outline-0 focus:ring-0 border-[2px] border-blue-500 h-5 m-2 hover:bg-white">Create Skills</button>
</form>
    </div>
  )
}

export default AddEducation