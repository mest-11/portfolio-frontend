import { useNavigate } from "react-router-dom"
import PagesLayout from "../Layout/pagesLayout"
import K from "../../../constants"
import { Edit2Icon, ScrollText } from "lucide-react"


const Education = () => {
  const navigate = useNavigate()
  return (
    <PagesLayout headerText="Education" buttonText="Add New Education" onClick={() =>
      navigate("/dashboard/eductaion/add-education")}>

      <div className="grid grid-cols-2 gap-6">

        {
          K.EDUCATION.map((education, index) => (
            <div
              key={index} className="h-40 shadow-md rounded-xl flex flex-col p-5">
              <span className="text-blue-600 animate-pulse text-center">{education.Institution}</span>
              <span className="hover:text-blue-600 text-center">{education.Degree}</span>
              <span></span>

              <div className="ml-auto flex gap-x-2">
                <span><ScrollText className="text-blue-600 animate-bounce" /></span>

                <span><Edit2Icon className="text-blue-600 animate-bounce" /></span>
              </div>
            </div>

          )

          )
        }



      </div>

    </PagesLayout>
  );


}
export default Education