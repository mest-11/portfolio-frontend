
import { useForm } from 'react-hook-form';
import { apiAddSkill } from '../../../services/skill';
import { toast } from 'react-toastify';
import { useState } from 'react';
import PagesLoader from '../../../components/pagesLoader';



const AddSkill = () => {


  return (
    <div className="bg-[#F8F9FB] flex box-border place-content-center text-center">
        <div className="layout-content-container flex flex-col w-[52px] py-2 max-w-[600px] flex-1 place-content-center border border-box border-50 border-blue-500 bg-inherit bg-blue-300">
        <h2 className="text-center place-content-center px-4 pb-3 pt-5">Create a New Skill</h2>

        <form className="border-portBlue">

          
            <div>
              <label htmlFor="skills">Skills</label>
              <textarea id="projectDescription" name="projectDescription" className='px-4 rounded-md text-center pb-5 pt-2 focus:outline-0 focus:ring-0 border-[2px] border-blue-500 h-10 m-4' placeholder='Enter Skills'/>

            </div>

            <div class="">
              <label for="projectName">Proficiency</label>
              <input type="text" id="proficiency" name="proficiency" className='px-4 text-center pb-2 pt-1 focus:outline-0 focus:ring-0 border-[2px] rounded-md border-blue-500 h-7 m-2' />
            </div>


            <button type="submit" className="animate-bounce rounded-md px-4 text-center pb-5 pt-1 focus:outline-0 focus:ring-0 border-[2px] border-blue-500 h-5 m-2 hover:bg-white">Create Skills</button>
          </form>
        </div>
        </div>

  )
}

export default AddSkill