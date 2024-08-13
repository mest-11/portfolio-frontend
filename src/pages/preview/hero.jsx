import { Link, useOutletContext } from "react-router-dom";

const PreviewHero = () => {
  const user = useOutletContext();
  console.log("Data: ", user);

  return (
    <div className="bg-[#F3F3F3] pt-16 lg:pt-20"> {/* Adjusted padding-top */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-x-[4rem] px-4 py-8 lg:px-[5rem] lg:py-[5rem]">
        <img
          src={`https://savefiles.org/${user?.userProfile?.profilePicture}?shareable_link=307`}
          alt="user image"
          className="h-[15rem] w-[15rem] lg:h-[25rem] lg:w-[25rem] rounded-full border-r-1 slide-in-top"
        />
        <div className="flex flex-col justify-center w-full lg:w-[50%] mt-8 lg:mt-0 slide-in-bottom text-center lg:text-left">
          <span className="text-[2.5rem] lg:text-[5rem] antialiased font">Hello</span>
          <span className="text-[18px] lg:text-[22px] font-medium antialiased">About me</span>
          <span className="text-[16px] lg:text-[20px] antialiased">
            {user.userProfile?.about}
          </span>

          <div className="flex flex-col lg:flex-row flex-wrap gap-y-4 lg:gap-y-10 gap-x-4 lg:gap-x-5 pt-8 text-[16px] lg:text-[20px]">
            <div className="w-full lg:w-[8rem] h-auto lg:h-[8rem] bg-portBlue border-r-1 flex justify-center items-center hover:bg-white font-medium px-6 py-3 rounded lg:rounded-full">
              <Link to={`/preview/${user.userName}/resume`} className="w-full text-center lg:w-auto">Resume</Link>
            </div>
            <div className="w-full lg:w-[8rem] h-auto lg:h-[8rem] bg-orange-300 border-r-1 flex justify-center items-center hover:bg-white font-medium px-6 py-3 rounded lg:rounded-full">
              <Link to={`/preview/${user.userName}/projects`} className="w-full text-center lg:w-auto">Projects</Link>
            </div>
            <div className="w-full lg:w-[8rem] h-auto lg:h-[8rem] bg-black border-r-1 flex justify-center items-center text-white hover:bg-white hover:text-black font-medium px-6 py-3 rounded lg:rounded-full">
              <Link to={`/preview/${user.userName}/contact`} className="w-full text-center lg:w-auto">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewHero;
