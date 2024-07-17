import React from 'react'

const AddExperience = () => {
  return (
    <div class="container">
        <h2>Share Your Experience</h2>

        <form id="experienceForm">
            <div class="form-group">
                <label for="jobTitle">Job Title</label>
                <input type="text" id="jobTitle" name="jobTitle" required/>
            </div>

            <div class="form-group">
                <label for="companyName">Company Name</label>
                <input type="text" id="companyName" name="companyName" required/>
            </div>

            <div class="form-group">
                <label for="location">Location</label>
                <input type="text" id="location" name="location" required/>
            </div>

            <div class="form-group">
                <label for="startDate">Start Date</label>
                <input type="date" id="startDate" name="startDate" required/>
            </div>

            <div class="form-group">
                <label for="endDate">End Date</label>
                <input type="date" id="endDate" name="endDate"/>
            </div>

            <div class="form-group">
                <label for="description">Description</label>
                <textarea id="description" name="description" required></textarea>
            </div>

            <button type="submit">Submit Experience</button>
            
        </form>
    </div>
  )
}

export default AddExperience