import { useEffect, useState } from 'react'
import Sidebar from '../../../components/Sidebar'
import { Link, Navigate, Outlet } from 'react-router-dom'
import { getDetails, getToken } from '../../../services/config.js'
import { SquareMenu } from 'lucide-react'


const DashBoardLayout = () => {
  const [user,setUser] = useState();

  const { token , firstName, lastName, userName } = getDetails();

  useEffect(() => {
    if (token) {
      setUser({
        firstName,
        lastName,
        userName,
      });
    }
  }, []);

  // const getUserProfile = async () => {
  //   try {
  //     const response =await apiGetProfile();
  //     const userProfileData = response?.data.profile;
  //     setProfile(userProfileData);
  //   } catch (error) {
  //     toast.error("An error occured");
  //   }
  // };

  // useEffect(() => {
  //   if (token) {
  //     getUserProfile();
  //   }
  // },[]);

  if (!token) {
    return <Navigate to="/login" />;
  }

  const getAvatar = () => {
    if (!user) return "N/A";
    const initials = `${firstName[0]}${lastName[0]}`;
    return initials.toUpperCase();
  };

  return (
    <div className='flex'>
      <Sidebar />
      <div className='w-full'>
        <div className='flex px-16 py-5 shadow items-center'>
        <span className="p-3">
            <SquareMenu className="size-8" />
          </span>
          <Link
          to= "/dashboard/profile"
          className="ml-auto bg-blue-300 p-4">
            <span  className="text-xl font-semibold text-white">
            {getAvatar()}
            </span>
          </Link>

        </div>
        <Outlet  context ={[user,setUser]}/>
      </div>

    </div>
  );
};

export default DashBoardLayout