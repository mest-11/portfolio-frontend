import { useEffect, useState } from 'react'
import Sidebar from '../../../components/Sidebar'
import { Link, Navigate, Outlet } from 'react-router-dom'
import { getToken } from '../../../services/config';
import { apiGetProfile } from '../../../services/profile';
import { toast } from 'react-toastify';
import { SquareMenu } from 'lucide-react';

const DashBoardLayout = () => {
  const [profile,setProfile] = useState();

  const token = getToken();

  const getUserProfile = async () => {
    try {
      const response =await apiGetProfile();
      const userProfileData = response?.data.profile;
      setProfile(userProfileData);
    } catch (error) {
      toast.error("An error occured");
    }
  };

  useEffect(() => {
    if (token) {
      getUserProfile();
    }
  },[]);

  if (!token) {
    return <Navigate to="/login" />;
  }

  const getAvatar = () => {
    if (!profile) return "N/A";
    const initials = `${profile.firstName[0]}${profile.lastName[0]}`;
    return initials.toUpperCase();
  };
  return (
    <div className='flex'>
      <Sidebar />
      <div className='w-full'>
        <div className='flex px-16 py-5 shadow items-center bg-orange-200'>
        {/* <span className="p-3  bg-portBlue text-blue rounded-full shadow-md hover:bg-white hover:text-blue"> */}
            <SquareMenu className="size-8" />
          {/* </span> */}
          <Link
          to= "/dashboard/profile"
          className="ml-auto bg-blue-300 p-4">
            <span  className="text-xl font-semibold text-white">
            {getAvatar()}
            </span>
          </Link>

        </div>
        <Outlet  context ={[profile,setProfile]}/>
      </div>

    </div>
  )
}

export default DashBoardLayout