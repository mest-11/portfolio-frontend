
import { useForm } from 'react-hook-form';
import { apiAddSkill } from '../../../services/skill';
import { toast } from 'react-toastify';
import { useState } from 'react';
import PagesLoader from '../../../components/pagesLoader';



const AddSkill = () => {

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#F8F9FB] overflow-hidden">

    <div className="flex justify-center py-40  box-border shadow-md">

        <div className="flex flex-col py-8 max-w-[400px] flex-1 place-content-center  text-center border border-dotted border-blue-500 bg-blue-300 ">

        <h2 className="text-center place-content-center px-4 pb-3 pt-2 font-bold">Create a New Skill</h2>

        <form>

          
            <div className="flex items-center place-content-center px-5 py-2">
              <label htmlFor="skills" className="flex text-[#141C24] font-semibold pb-2">Skills</label>
              <textarea id="projectDescription" name="projectDescription" className='px-4 rounded-md text-center pb-5 pt-2 focus:outline-0 focus:ring-0 border-[2px] border-blue-500 h-10 m-4' placeholder='Enter Skills'/>

            </div>

            <div className="flex items-center place-content-center px-5 py-2">
              <label htmlFor="projectName" className="flex text-[#141C24] font-medium pb-2">Proficiency</label>
              <input type="text" id="proficiency" name="proficiency" className='px-4 text-center pb-2 pt-1 focus:outline-0 focus:ring-0 border-[2px] rounded-md border-blue-500 h-7 m-2' />
            </div>


            <button type="submit" className="animate-bounce rounded-md px-2 text-center pb-5 pt-1 focus:outline-0 focus:ring-0 border-[2px] bg-orange-200 border-blue-500 h-5 m-5 hover:bg-white">Create Skills</button>
          </form>
        </div>
        </div>
        </div>

  )
}

export default AddSkill