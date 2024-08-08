import React from 'react'
import { apiAddExperiences } from '../../../services/experiences';
import { useForm } from 'react-hook-form';
import Loader from '../../../components/loader';

const AddExperience = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const [isSubmitting, setIsSubmitting] = useState(false);
    
      const onSubmit = async (data) => {
        console.log(data);
        setIsSubmitting(true);
        try {
          const res = await apiAddExperiences({
            name: data.name,
            description: data.description,
            date:data.date.toLowerCase(),
          });
          console.log(res.data);
          toast.success(res.data.message);
        } catch (error) {
          console.log(error);
          toast.error("An error occured");
        } finally {
          setIsSubmitting(false);
        }
      };
    
    return (
        <div className="bg-[#F8F9FB] flex box-border place-content-center text-center">
            <div className="layout-content-container flex flex-col w-[52px] py-2 max-w-[600px] flex-1 place-content-center border border-box border-50 border-blue-500 bg-inherit bg-blue-100">
                <h2>Share Your Experience</h2>

                <form onSubmit={handleSubmit(onSubmit)}>

                    <div class="flex flex-col text-blue-600">
                        <label for="companyName">Company Name</label>
                        <input  id="name" name="companyName"
                        type="name"
                        {...register("name", { required: "name is required" })} placeholder='Enter Here' className='px-4 text-center pb-2 pt-1 focus:outline-0 focus:ring-0 border-[2px] rounded-md border-blue-500 h-7 m-2' />{errors.name && <p className="text-red-500">{errors.name.message}</p>}
                    </div>

                    <div class="flex flex-col text-blue-600">
                        <label for="role">Role</label>
                        <input type="text" id="role" name="role" placeholder=" Enter Here" className='px-4 text-center pb-2 pt-1 focus:outline-0 focus:ring-0 border-[2px] rounded-md border-blue-500 h-7 m-2' />
                    </div>

                    <div class="flex flex-col text-blue-600">
                        <label for="location">Skills</label>
                        <input type="text" id="skills" name="skills" placeholder="Enter Here" className='px-4 text-center pb-2 pt-1 focus:outline-0 focus:ring-0 border-[2px] rounded-md border-blue-500 h-7 m-2' />
                    </div>

                    <div class="flex flex-col text-blue-600">
                        <label for="location">Responsibility</label>
                        <input type="text" id="responsibiliity" name="responsibility" placeholder="Enter Here" className='px-4 text-center pb-2 pt-1 focus:outline-0 focus:ring-0 border-[2px] rounded-md border-blue-500 h-7 m-2' />
                    </div>


                    <div class="flex flex-col text-blue-600">
                        <label for="location">Location</label>
                        <input type="text" id="location" name="location" placeholder="Enter Here" className='px-4 text-center pb-2 pt-1 focus:outline-0 focus:ring-0 border-[2px] rounded-md border-blue-500 h-7 m-2' />
                    </div>

                    <div class="flex flex-col text-blue-600">
                        <label for="startDate">Start Date</label>
                        <input type="date" id="startDate" name="startDate" className='px-4 text-center pb-2 pt-1 focus:outline-0 focus:ring-0 border-[2px] rounded-md border-blue-500 h-7 m-2' />
                    </div>

                    <div className="flex flex-col text-blue-600">
                        <label for="endDate">End Date</label>
                        <input type="date" id="endDate" name="endDate" className='px-4 text-center pb-2 pt-1 focus:outline-0 focus:ring-0 border-[2px] rounded-md border-blue-500 h-7 m-2' />
                    </div>

                    <button type="submit" className='animate-bounce rounded-md px-4 text-center pb-5 pt-1 focus:outline-0 focus:ring-0 border-[2px] border-blue-500 h-5 m-2 hover:bg-white'>{isSubmitting ? <Loader /> : "Add Experience"}</button>

                </form>
            </div>
        </div>

    )
}

export default AddExperience