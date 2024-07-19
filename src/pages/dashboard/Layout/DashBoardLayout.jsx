import Sidebar from '../../../components/Sidebar'
import { Outlet } from 'react-router-dom'

const DashBoardLayout = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='w-full'>
        <Outlet />
      </div>

    </div>
  )
}

export default DashBoardLayout