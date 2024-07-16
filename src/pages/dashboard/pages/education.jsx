import PagesLayout from "../Layout/pagesLayout"


const Education = () => {
  return (
    <PagesLayout headerText="Education" buttonText="Add New Education" onClick={() => 
      navigate("/dashboard/eductaion/add-education")}>
        
        <div>
          
        </div>
        <span>All Skills here</span>
      </PagesLayout>
  )
}

export default Education