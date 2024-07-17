import Logo from "../assets/images/logoBlue.png"

const Landing = () => {
  return (
    <div className="bg-slate-200 flex justify-center items-center px-[20rem] py-[10rem] overscroll-none">
      <img src={Logo} alt="logo" className="h-[17.3rem] w-[30rem]" />
      <div className="flex flex-col gap-y-10 pt-10">
        <button className='p-10 w-[20rem] h-[5rem] bg-portBlue rounded-[30px] text-black text-[20px] font-semibold antialiased flex flex-col justify-center items-center shadow-lg shadow-blue-500'><a href="/login">Already have an account</a></button>

        <button className='p-10 w-[20rem] h-[5rem] bg-black rounded-[30px] text-white text-[20px] font-semibold antialiased flex flex-col justify-center items-center shadow-lg shadow-gray-500'><a href="/signup">Create Account</a></button>


      </div>



    </div>
  )
}

export default Landing