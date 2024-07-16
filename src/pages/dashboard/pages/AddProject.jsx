import React from 'react'

const AddProject = () => {
  return (
    <div class="container">
      <h2>Create a New Project</h2>

      <form className="">

          <div className="">
            <label htmlFor='Image'>Upload Image</label>
            <input type='file' id='' />
          </div>

        <div class="">
          <label for="projectName">Project Name</label>
          <input type="text" id="projectName" name="projectName"/>
        </div>

        <div class="">
          <label htmlfor="projectDescription">Project Description</label>
          <textarea id="projectDescription" name="projectDescription" required></textarea>
        </div>

        <div>
            <label htmlFor='Contributors'>Contributors</label>
            <input type='text' placeholder='' />
          </div>


        <div class="">
          <label for="projectStatus">Project Status</label>
          <select id="projectStatus" name="projectStatus" required>
            <option value=""></option>
            <option value="not_started">Not Started</option>
            <option value="in_progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
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

          <div class="">
          <label for="startDate">Start Date</label>
          <input type="date" id="startDate" name="startDate"/>
        </div>

        <div class="">
          <label for="endDate">End Date</label>
          <input type="date" id="endDate" name="endDate"/>
        </div>


        <button type="submit">Create Project</button>
      </form>
    </div>
  )
}

export default AddProject