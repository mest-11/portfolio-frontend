import React from 'react'

const AddProject = () => {
  return (
    <div>

      <form action="">
        <div className="border-blue-400 shadow-lg ">

          <div>
            <label htmlFor='Image'>Upload Image</label>
            <input type='file' id='' />
          </div>


          <div>
            <label htmlFor='ProjectName'>Project Name</label>
            <input type='text' placeholder='' />
          </div>


          <div>
            <label htmlFor='Contributors'>Contributors</label>
            <input type='text' placeholder='' />
          </div>


          <div>
            <label htmlFor="skills">Skills</label>
            <select className='' placeholder="" />
            <option></option>
            <option>Html</option>
            <option>JavaScripts</option>
            <option>Python</option>
            <option>vue</option>
            <option>Mongodb</option>
            <option>React</option>
          </div>


          <div>
            <label for="homepage">Add your homepage:</label>
            <input type="url" id="homepage" name="homepage" className=''/>
          </div>


          <div>
            <label htmlFor="Institution">Institution</label>
            <select className='' placeholder="" />

            <option></option>
            <option>Kwame Nkrumah University of Science And Technology</option>
            <option>University of Ghana</option>
            <option>Kumasi Technical University</option>
            <option>Ho Technical University</option>
            <option>University of Mines</option>
            <option>KnustFord University</option>
            <option>Ashesi university</option>
            <option>Central University</option>
            <option>London University</option>
            <option>Cambridge university</option>
            <option>Dubai University</option>

          </div>


          <div>
            <label htmlFor="StartDate">Start Date</label>
            <input type="date" className="" placeholder="" />
          </div>


          <div>
            <label htmlFor="EndDate">End Date</label>
            <input type="date" className="" placeholder="" />
          </div>


          <div>
            <label htmlFor='Language'>Languages</label>
            <select className='' placeholder="" />
            <option></option>
            <option>English</option>
            <option>French</option>
            <option>Spanish</option>
            <option>Italian</option>
            <option>Chinese</option>
            <option>Twi</option>
            <option>Ga</option>
            <option>Dagbani</option>
            <option>Hausa</option>
            <option>Yoruba</option>
            <option>Bono</option>
          </div>

          <div>
            <button className=""><span className="truncate">Sunbmit</span>
            </button>
          </div>
        </div>

      </form>
    </div>
  )
}

export default AddProject