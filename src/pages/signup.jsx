import { useForm } from "react-hook-form";
import { apiCheckUsernameExist, apiSignUp } from "../services/auth"
import { useEffect, useState } from "react";
import { ColorRing } from 'react-loader-spinner';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";



const SignUp = () => {
  const [usernameAvailable, setUsernameAvailable] =useState(false);
  const [usernameNotAvailable, setUsernameNotAvailable] =useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate()

  const { register, handleSubmit,watch, formState: { errors } } = useForm();

const checkUserName = async(userName)=>{
  try {
    const res = await apiCheckUsernameExist(userName);
    console.log(res.data);
const user = res.data.user
if (user){
setUsernameNotAvailable(true);
}else{
setUsernameAvailable(true);
}


  } catch (error) {
    console.log(error);
    
  }
};




  const userNameWatch = watch("userName")
  console.log(userNameWatch);

  useEffect(
    () => {
      if (userNameWatch){
        checkUserName(userNameWatch);
      }
    }
  , [userNameWatch])
  

  const onSubmit = async (data) => {
    console.log(data);
    setIsSubmitting(true)
    let payload = {
      firstName: data.firstName,
      lastName: data.lastName,
      userName: data.userName,
      email: data.email,
      password: data.password,
      confirmedPassword: data.confirmedPassword

    };

    if (data.otherNames) {
      payload = { ...payload, otherNames: data.otherNames };
    }

    try {
      const res = await apiSignUp(payload);
      console.log(res.data);
      toast.success(res.data)

      setTimeout(() => {
        // redirecting to dashboard

        navigate("/login")
      }, 2000)

    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };



  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-144 flex flex-col rounded-xl bg-white text-gray-700 shadow-md"
        noValidate
      >
        <div className="relative mx-4 -mt-6 mb-4 grid h-20 place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-[#63AFFF] to-[#63AFFF] text-white shadow-lg shadow-[#63AFFF]/40">
          <h3 className="block text-3xl font-semibold">Sign Up</h3>
        </div>
        <div className="grid grid-cols-2 gap-4 p-6">
          <div className="relative">
            <input
              id="firstName"
              type="text"
              placeholder="First Name"

              className="peer h-11 w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-700 placeholder-transparent focus:border-[#63AFFF] focus:outline-none"
              {...register("firstName", { required: "First Name is required" })}

            />
            <label className="absolute left-3 -top-2 text-xs text-gray-500 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:left-3 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#63AFFF]">
              First Name
            </label>
            {errors.firstName && (<p className="text-red-500">{errors.firstName.message}</p>)}
          </div>
          <div className="relative">
            <input
              id="lastName"
              type="text"
              placeholder="Last Name"

              className="peer h-11 w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-700 placeholder-transparent focus:border-[#63AFFF] focus:outline-none"
              {...register("lastName", { required: "Last Name is required" })}
            />
            <label className="absolute left-3 -top-2 text-xs text-gray-500 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:left-3 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#63AFFF]">
              Last Name
            </label>
            {errors.lastName && (<p className="text-red-500">{errors.lastName.message}</p>)}
          </div>
          <div className="relative">
            <input
              id="otherNames"
              type="text"
              placeholder="Other Name"
              className="peer h-11 w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-700 placeholder-transparent focus:border-[#63AFFF] focus:outline-none"
              {...register("otherNames")}

            />
            <label className="absolute left-3 -top-2 text-xs text-gray-500 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:left-3 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#63AFFF]"
            >
              Other Name

            </label>
          </div>
          <div className="relative">
            <input
              id="userName"
              type="text"
              placeholder="Username"

              className="peer h-11 w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-700 placeholder-transparent focus:border-[#63AFFF] focus:outline-none"
              {...register("userName", { required: "User Name is required" })}
            />
            <label className="absolute left-3 -top-2 text-xs text-gray-500 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:left-3 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#63AFFF]">
              Username
            </label>
            {errors.userName && (<p className="text-red-500">{errors.userName.message}</p>)}
          {
            usernameAvailable && <p className="text-blue-500">Username available!</p>
          }
          {
            usernameNotAvailable && <p className="text-red-700">Username taken!</p>
          }
          </div>
          <div className="relative col-span-2">
            <input
              id="email"
              type="email"
              placeholder="Email"

              className="peer h-11 w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-700 placeholder-transparent focus:border-[#63AFFF] focus:outline-none"
              {...register("email", { required: "email is required" })}
            />
            <label className="absolute left-3 -top-2 text-xs text-gray-500 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:left-3 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#63AFFF]">
              Email
            </label>
            {errors.email && (<p className="text-red-500">{errors.email.message}</p>)}
          </div>
          <div className="relative">
            <input
              id="password"
              type="password"
              placeholder="Password"

              className="peer h-11 w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-700 placeholder-transparent focus:border-[#63AFFF] focus:outline-none"
              {...register("password", { required: "password is required", minLength: 8, })}
            />
            <label className="absolute left-3 -top-2 text-xs text-gray-500 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:left-3 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#63AFFF]">
              Password
            </label>
            {errors.password && (<p className="text-red-500">{errors.password.message}</p>)}
          </div>
          <div className="relative">
            <input
              id="confirmedPassword"
              type="password"
              placeholder="Confirm Password"

              className="peer h-11 w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-700 placeholder-transparent focus:border-[#63AFFF] focus:outline-none"
              {...register("confirmedPassword", { required: "confirm password", minLength: 8, })}
            />
            <label className="absolute left-3 -top-2 text-xs text-gray-500 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:left-3 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#63AFFF]">
              Confirm Password
            </label>
            {errors.confirmedPassword && (<p className="text-red-500">{errors.confirmedPassword.message}</p>)}
          </div>
        </div>

        <div className="p-6 pt-0">
          <button
            type="submit"
            className="block w-full rounded-lg bg-portBlue hover:bg-portBlue py-3 text-center text-xs font-bold uppercase"
          >
            {isSubmitting ? <ColorRing
              visible={true}
              height="20"
              width="20"
              ariaLabel="color-ring-loading"
              wrapperStyle={{}}
              wrapperClass="color-ring-wrapper"
              colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            /> : "Sign Up"}
          </button>
          <p className="mt-4 flex justify-center text-sm font-light text-gray-700">
            Already have an account?
            <a className="ml-1 text-sm font-bold text-[#63AFFF]" href="/login">
              Log in
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
