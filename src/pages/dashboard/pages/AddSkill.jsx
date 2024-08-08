
import { useForm } from 'react-hook-form';
import { apiAddSkill } from '../../../services/skill';
import { toast } from 'react-toastify';
import { useState } from 'react';
import PagesLoader from '../../../components/pagesLoader';
import Loader from '../../../components/loader';



const AddSkill = () => {

const {
  register,
  handleSubmit,
  formstate: {errors},

} = useForm();
const [isSubmitting, setIsSubmitting] = useState(false);

const onSubmit = async (data) => {
  console.log(data);
  setIsSubmitting(true);
  try {
    const res = await apiAddSkill({
 name: data.name,
 levelOfProficiency: data.proficiency.toLowerCase(),
      });
      console.log(res.data);
      toast.success(res.data.message);
  }catch(error){
    console.log(error);
    toast.error("An error occured");
  }finally{
    setIsSubmitting(false)
  }
};

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#F8F9FB] overflow-hidden">

    <div className="flex justify-center py-40  box-border shadow-md">

        <div className="flex flex-col py-8 max-w-[400px] flex-1 place-content-center  text-center border border-dotted border-blue-500 bg-blue-300 ">

        <h2 className="text-center place-content-center px-4 pb-3 pt-2 font-bold">Create a New Skill</h2>

        <form onSubmit={handleSubmit(onSubmit)}>

            <div className="flex items-center place-content-center px-5 py-2">
              <label htmlFor="name" className="flex text-[#141C24] font-semibold pb-2">Name</label>
              < input type ="name" id="name"{...register("name",{required:"name is required"})} className='px-4 rounded-md text-center pb-5 pt-2 focus:outline-0 focus:ring-0 border-[2px] border-blue-500 h-10 m-4' placeholder='Enter your name'/>
              {errors.name&& <p className="text-red-500">{errors.name.message}</p>}
            </div>

            <div className="flex items-center place-content-center px-5 py-2">
              <label htmlFor="projectName" className="flex text-[#141C24] font-medium pb-2">Proficiency</label>
              <input type="proficiency" id="proficiency"  {...register("proficiency", {
              required: "proficiency is required", 
            })} placeholder='Enter Here' className='px-4 text-center pb-2 pt-1 border-[2px] rounded-md border-blue-500 h-7 m-2' />{errors.proficiency && (
              <p className="text-red-500">{errors.proficiency.message}</p>
            )}
            </div>


            <button type="submit" className="animate-bounce rounded-md px-2 flex justify-center pb-5 pt-1 border-[2px] bg-orange-200 border-blue-500 h-5 m-5 hover:bg-white">{isSubmitting ? <Loader/>:  "Add Skill" }
            </button>
          </form>
        </div>
        </div>
        </div>

  )
}

export default AddSkill