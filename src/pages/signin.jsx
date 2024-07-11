import { useForm } from "react-hook-form";
import { KeyRound, UserRoundPlus } from "lucide-react";




const Signin = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (


    <form className="flex flex-col items-center " onSubmit={handleSubmit(onSubmit)}>
      <div id="login-register">

        <div id="box">
          <span className="text-[18px] font-medium antialiased p-10">Don't have an account? <br />Create an account by signing up! </span>
          <label for="sign-up-toggle" className="flex gap-x-2"> <KeyRound /> Login</label>
          <input type="checkbox" id="sign-up-toggle" />
          <label for="login-toggle" className="flex gap-x-2"><UserRoundPlus />  Sign up</label>
          <input type="checkbox" id="login-toggle" />
          <div id="login-panel">
            <form action="POST">
              <input type="text" placeholder="First Name " className="outline-none"
                {
                ...register("firstName", { required: "First name is required" })
                } />
              {errors.firstName && (<p className="text-red-500">{errors.firstName.message}</p>)}



              <input type="text" placeholder="Last Name" className="outline-none"
                {
                ...register("lastName", { required: "Last name is required" })
                }
              />
              {errors.lastName && (<p className="text-red-500">{errors.lastName.message}</p>)}

              <input type="email" placeholder="Email" className="outline-none"
                {
                ...register("email", { required: "Email is required" })
                }
              />
               {errors.email && (<p className="text-red-500">{errors.email.message}</p>)}

              <input type="password" placeholder="Password"
                {
                ...register("password", { required: "Password is required", minLength: 8 })
                }
              />
               {errors.password && (<p className="text-red-500">{errors.password.message}</p>)}
            </form>
            <button ><p>Sign up</p><p>Login</p></button>
          </div>
        </div>
      </div>
    </form>


  )
}

export default Signin