
import { useForm } from 'react-hook-form';
import { apiAddSkill } from '../../../services/skill';
import { toast } from 'react-toastify';
import { useState } from 'react';
import PagesLoader from '../../../components/pagesLoader';



const AddSkill = () => {

  const { register, handleSubmit, formState: { errors } } = useForm()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const onSubmit = async (data) => {
    console.log(data)
    setIsSubmitting(true);

    try {
      const res = await apiAddSkill({
        name: data.name, levelOfProficiency: data.proficiency

      })

      console.log(res.data);
      toast.success(res.data.message)
    } catch (error) {
      console.log(error)
      toast.error("An error occured")
    } finally {
      setIsSubmitting(false)
    }
  };
  return (
    <div className="layout-content-container flex flex-col w-[52px] py-2 max-w-[600px] flex-1 place-content-center border border-box border-50 border-blue-500 bg-inherit bg-blue-100">

      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col p-20 gap-y-5'>

        <h2 className="text-center place-content-center px-4 pb-3 pt-5">Create a New Skill</h2>

        <label htmlFor="">Skill</label>
        <input type="text" id="name" className='px-4 rounded-md text-center pb-5 pt-2 focus:outline-0 focus:ring-0 border-[2px] border-blue-500 h-10 m-4' placeholder='Enter Skills Here'
          {...register("name", { required: "Name is required" })} />

        <label htmlFor="">Proficiency</label>
        <input type="proficiency" id="proficiency" className='px-4 text-center pb-2 pt-1 focus:outline-0 focus:ring-0 border-[2px] rounded-md border-blue-500 h-7 m-2'
          {...register("proficiency", { required: " proficiency is required" })} />

        <button type="submit" className="animate-bounce rounded-md px-4 text-center pb-5 pt-1 focus:outline-0 focus:ring-0 border-[2px] border-blue-500 h-5 m-2 hover:bg-white">{isSubmitting ? <PagesLoader /> : "Add Skill"}</button>

      </form>
    </div>

  )
}

export default AddSkill