import React, { useState } from 'react'
import { apiAddProfile } from '../../../services/profile';
import Loader from '../../../components/loader';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProfile = () => {
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
            const res = await apiAddProfile({
                name: data.name,
                levelOfProficiency: data.proficiency.toLowerCase(),
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

        <div className="max-w-md mx-auto p-4 md:p-6 lg:p-8 bg-white rounded-lg shadow-md">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-6">
                    <div>
                        <label htmlFor="profilePicture" className="block text-sm font-medium text-gray-700">Upload Image</label>
                        <input type="file" id="profilePicture" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="" />
                    </div>

                    <div>
                        <label htmlFor="Gender" className="block text-sm font-medium text-gray-700">Gender</label>
                        <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="" id="sex" name="sex">
                            <option></option>
                            <option>Female</option>
                            <option>Male</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="Bio" className="block text-sm font-medium text-gray-700">Bio</label>
                        <input type="bio" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="" id="bio" {...register("name", { required: "name is required" })} />
                    </div>

                    <div>
                        <label htmlFor="About" className="block text-sm font-medium text-gray-700">About</label>
                        <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="" id="about" name="about" />
                    </div>

                    <div>
                        <label htmlFor="DateofBirth" className="block text-sm font-medium text-gray-700">Date Of Birth</label>
                        <input type="date" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="" id="dateOfBirth" name="dateOfBirth" />
                    </div>

                    <div>
                        <label htmlFor="Contact" className="block text-sm font-medium text-gray-700">Contact</label>
                        <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="" id="contact" name="contact" />
                    </div>

                    <div>
                        <label htmlFor="Resume" className="block text-sm font-medium text-gray-700">Resume</label>
                        <input type="file" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="" id="resume" name="resume" />
                    </div>

                    <div>
                        <label htmlFor="githubLink" className="block text-sm font-medium text-gray-700">Github</label>
                        <input type="url" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" id="githubLink" name="githubLink" />
                    </div>

                    <div>
                        <label htmlFor="linkedInLink" className="block text-sm font-medium text-gray-700">LinkedIn</label>
                        <input type="url" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" id="linkedInLink" name="linkedInLink" placeholder="" />
                    </div>

                    <div>
                        <label htmlFor="twitterLink" className="block text-sm font-medium text-gray-700">Twitter</label>
                        <input type="url" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" id="twitterLink" name="twitterLink" placeholder="" />
                    </div>

                    <div>
                        <label htmlFor="Language" className="block text-sm font-medium text-gray-700">Languages</label>
                        <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder=""/>
                            <option></option>
                            <option>English</option>
                            <option>French</option>
                            <option>Spanish</option>
                            <option>Italian</option>
                            <option>Chinese</option>
                            <option>Twi</option>
                            <option>Ga</option>
                            <option>Dagbani</option>
                            <option>Hausa</option>
                            <option>Yoruba</option>
                            <option>Bono</option>
                    </div>

                    <button className="truncate flex justify-center " type='submit'>{isSubmitting ? <Loader /> : "Add Profile"}
                    </button>


                </div>
            </form>
        </div>




    )
}

export default AddProfile