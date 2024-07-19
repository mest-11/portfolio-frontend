
import { useForm } from 'react-hook-form';
import { apiAddSkill } from '../../../services/skill';
import { toast } from 'react-toastify';
import { useState } from 'react';
import PagesLoader from '../../../components/pagesLoader';



const AddSkill = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [isSubmitting, setIsSubmitting]= useState(false)
  const onSubmit = async(data)=>{
    console.log(data)
    setIsSubmitting(true);

    try {
      const res =await apiAddSkill({
        name: data.name, levelOfProficiency: data.proficiency

      })
      
      console.log(res.data);
      toast.success(res.data.message)
    } catch (error) {
      console.log(error)
      toast.error("An error occured")
    }finally{
      setIsSubmitting(false)
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col p-20 gap-y-5'>

      <label htmlFor="">Skill</label>
<input type="text" id="name" 
{...register("name", {required: "Name is required"})}/>

<label htmlFor="">Proficiency</label>
<input type="proficiency"  id="proficiency" 
{...register("proficiency", {required: " proficiency is required"})}/>

<button type="submit">{isSubmitting? <PagesLoader/>:"Add Skill"}</button>

    </form>
  )
}

export default AddSkill