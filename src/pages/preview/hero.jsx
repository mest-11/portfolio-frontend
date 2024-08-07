import SubFooter from "../../components/subFooter";
import { Link, useOutletContext } from "react-router-dom";

const PreviewHero = () => {
  const user = useOutletContext();
  console.log("Data: ", user);

  return (
    <div className="bg-[#F3F3F3]">
      <div className="flex justify-center items-center gap-x-5 px-[5rem] py-[8rem]">
        <img
          src={`https://savefiles.org/${user?.userProfile?.profilePicture}?shareable_link=307`}
          alt="user image"
          className="h-[25rem] w-[25rem] rounded-full  border-r-1 slide-in-top"
        />
        <div className="flex flex-col justify-center w-[50%] slide-in-bottom">
          <span className="text-[5rem] antialiased font">Hello</span>
          <span className="text-[22px] font-medium antialiased">About me</span>
          <span className="text-[20px] antialiased">
            {user.userProfile?.about}
          </span>

          <div className="flex gap-y-10 gap-x-5 p-10 text-[20px]  ">
            <div className="size-[8rem] rounded-full bg-portBlue border-r-1 flex justify-center items-center hover:bg-white font-medium">
              <Link to={`/preview/${user.userName}/resume`}>Resume</Link>
            </div>
            <div className="size-[8rem] rounded-full bg-orange-300 border-r-1 flex justify-center items-center hover:bg-white font-medium">
              <Link to={`/preview/${user.userName}/projects`}>Projects</Link>
            </div>
            <div className="size-[8rem] rounded-full bg-black border-r-1 flex justify-center items-center text-white hover:bg-white hover:text-black font-medium">
              <Link to={`/preview/${user.userName}/contact`}>Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewHero;
