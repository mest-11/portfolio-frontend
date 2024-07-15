import { useForm } from "react-hook-form";
import { apiLogIn } from "../services/auth"

const LogIn = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = async (data) => {
    console.log(data);

    try {
      const res = await apiLogIn({
        email: data.email,
        password: data.password
      })
      console.log("Response: ", res)
      console.log("Second:I got called ")
    } catch (error) {
      console.log(error)
    }
  };



return (
  <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-128 flex flex-col rounded-xl bg-white text-gray-700 shadow-md"

    >
      <div className="relative mx-4 -mt-6 mb-4 grid h-20 place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-[#63AFFF] to-[#63AFFF] text-white shadow-lg shadow-[#63AFFF]/40">
        <h3 className="block text-3xl font-semibold">Login</h3>
      </div>
      <div className="flex flex-col gap-2 p-6">
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
        </div>
        <div className="relative">
          <input
            id="password"
            type="text"
            placeholder="Password"
            className="peer h-11 w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-700 placeholder-transparent focus:border-[#63AFFF] focus:outline-none"
            {...register("password", { required: "password is required", minLength: 8, })}
          />
          {errors.email && (<p classNane="text-red-500">{errors.email.message}</p>)}
          <label className="absolute left-3 -top-2 text-xs text-gray-500 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:left-3 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#63AFFF]">
            Password
          </label>
        </div>
        {errors.email && (<p classNane="text-red-500">{errors.email.message}</p>)}
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
          Login
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