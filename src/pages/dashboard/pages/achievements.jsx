import React from 'react'
import PagesLayout from '../Layout/pagesLayout'
import { useNavigate } from 'react-router-dom'
import { Edit2Icon, Trophy } from 'lucide-react'

const Achievements = () => {
  const navigate = useNavigate()
  return (
    <PagesLayout headerText="Achievements" buttonText="Add New Achievement" onClick={() =>
      navigate("/dashboard/achievements/add-achievement")}>

      <div className="grid grid-cols-2 gap-6">


        <div className="h-40 shadow-md rounded-xl flex flex-col p-5">
          <span className="text-blue-600 text-center"></span>
          <span className="hover:text-blue-600 text-center"></span>
          <span></span>

          <div className="ml-auto flex gap-x-2">
            <span><Trophy className="text-blue-600 animate-bounce" /></span>

            <span><Edit2Icon className="text-blue-600 animate-bounce" /></span>
          </div>
        </div>
        </div>
    </PagesLayout>
  )
}

export default Achievements