import K from '../constants'
import { Link } from 'react-router-dom'
import { LogOutIcon } from 'lucide-react'

const Sidebar = () => {
    return (
        <div className=" h-screen w-[300px] bg-portBlue shadow-2xl flex flex-col px-8 py-12">
            <div>   
                <span className="text-3xl font-bold text-white text-center">Porto<b className='text-purple-600'>flio</b></span>
                {/* <img src=" alt=" /> */}
            </div>

            <div className="flex flex-col gap-y-3 mt-12">
                {
                    K.NAVLINKS.map(({ icon, text, link }, index) => (
                        <Link
                            to={link}
                            key={index} className='flex gap-x-4 items-center hover:bg-portBlue hover:text-white hover:rounded-md'>
                            <span className="bg-portBlue text-white p-2 rounded-full">
                                {icon}
                            </span>
                            <span>{text}</span>
                        </Link>
                    )

                    )
                }
            </div>
            <button className="flex gap-x-4 items-center mt-auto hover:bg-white hover:rounded">
                <div className="bg-portBlue text-white p-2 rounded-full">
                    <LogOutIcon/>
                </div>
                <span>Logout</span>
            </button>
        </div>
    )
}

export default Sidebar


