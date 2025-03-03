import { useForm } from "react-hook-form";
import { apiLogIn } from "../services/auth"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {toast} from "react-toastify"
import Loader from "../components/loader";


const LogIn = () => {

  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate()





  const { register, handleSubmit, formState: { errors } } = useForm({ reValidateMode: "onBlur", mode: "all" });

  const onSubmit = async (data) => {
    console.log(data);
    setIsSubmitting(true);

    try {
      const res = await apiLogIn({
        email: data.email,
        password: data.password
      })
      console.log("Response: ", res.data);
      localStorage.setItem("accessToken",res.data.accessToken);

      toast.success(res.data.message)
      setTimeout(()=>{
           // redirecting to dashboard

      navigate("/dashboard")
      },2000)

   

    } catch (error) {
      console.log(error);
      toast.error("An error occured")

    }
    finally {
      setIsSubmitting(false)
    }
  };



  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[400px] h-[450px] flex flex-col rounded-xl bg-white text-gray-700 shadow-md"

      >
        <div className="relative mx-4 -mt-6 mb-4 grid h-20 place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-[#63AFFF] to-[#63AFFF] text-white shadow-lg shadow-[#63AFFF]/40">
          <h3 className="block text-3xl font-semibold">Login</h3>
        </div>
        <div className="flex flex-col gap-14 p-6">
          <div className="relative">
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

          <div className="flex justify-end">
            <a href="#forgot-password" className="text-sm font-light text-gray-700">
              Forgot Password?
            </a>
          </div>
        </div>
        <div className="p-6 pt-0">
          <button
            type="submit"
            className="block w-full rounded-lg bg-portBlue hover:bg-portBlue py-3 text-center text-xs font-bold uppercase "
          >
            {isSubmitting ? <Loader/>: "Login"}
          </button>
          <p className="mt-4 flex justify-center text-sm font-light text-gray-700">
            Don't have an account?
            <a className="ml-1 text-sm font-bold text-[#63AFFF]" href="/signup">
              Sign up
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};


export default LogIn;
