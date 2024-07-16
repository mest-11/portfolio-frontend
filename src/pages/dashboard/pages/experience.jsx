import PagesLayout from "../Layout/pagesLayout"

const Expericence = () => {
  return (
    <PagesLayout headerText="Experience" buttonText="Add New Experience" onClick={() => 
      navigate("/dashboard/experience/add-experience")}>
        
        <div>
          
        </div>
        <span>Experinces</span>
      </PagesLayout>
  )
}

export default Expericence