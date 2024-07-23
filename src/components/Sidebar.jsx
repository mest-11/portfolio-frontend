import K from '../constants'
import {NavLink, useNavigate } from 'react-router-dom'
import { LogOutIcon } from 'lucide-react'
import { apiLogout } from '../services/auth';

const Sidebar = () => {
    const navigate = useNavigate();

    const logout = async () => {
        try {
            await apiLogout();
            toast.success("Logged out successfully");
            navigate("/login");
        } catch (error) {
            toast.error("An error occured");
        }
    };
    return (
        <div className=" h-screen w-[300px] bg-portBlue shadow flex flex-col px-8 py-12">
            <div>
                <span className="text-3xl font-bold text-white text-center">Port<b className='text-orange-300'>folio</b></span>
                {/* <img src=" alt=" /> */}
            </div>

            <div className="flex flex-col gap-y-3 mt-12">
                {
                    K.NAVLINKS.map(({ icon, text, link }, index) => (
                        <NavLink
                            to={link}
                            key={index} className={({isActive})=>`flex gap-x-4 items-center hover:bg-portBlue hover:text-white hover:rounded-md p-2 ${isActive ? "bg-portblue" : ""}`
                    }
                    end
                    >
                            <span className="text-white p-2 rounded-full">
                                {icon}
                            </span>
                            <span>{text}</span>
                        </NavLink>
                    )

                    )
                }
            </div>
            <button className="flex gap-x-4 items-center mt-auto hover:bg-white hover:rounded-md p-2" onClick={logout}
            >
                <span className="text-white p-2 rounded-full">
                    <LogOutIcon />
                </span>
                <span>Logout</span>
            </button>
        </div>
    )
}

export default Sidebar


