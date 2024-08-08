import React from 'react'
import PagesLayout from '../Layout/pagesLayout'
import { useNavigate } from 'react-router-dom'

const Profile = () => {

  return (
    <PagesLayout headerText="Profile" buttonText="Add Profile" onClick={() =>
      navigate("/dashboard/profile/add-profile")}>


      <div className="max-w-md mx-auto p-4 md:p-6 lg:p-8">
        <div className="flex items-center space-x-4">
          <img
            src='' alt="Profile Picture" className="p-20  bg-portBlue rounded-full" />

        </div>


        {/* <div className='flex'>
          <div className=' mb-5 mt-2 pt-3 flex-row'> */}
        <div >
          <h1 className="text-3xl font-bold">John Doe</h1>
          <p className="text-gray-600">Software Engineer</p>
          <div className="flex space-x-4">
            <a
              href="https://github.com/your-github-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/your-linkedin-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com/your-twitter-handle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              Twitter
            </a>
          </div>
        </div>


        <div className="mt-6">
          <h2 className="text-2xl font-bold">About</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.
          </p>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-bold">Bio</h2>
          <ul className="list-disc pl-4">
            <li>
              <strong>Gender:</strong> Male
            </li>
            <li>
              <strong>Date of Birth:</strong> 1990-01-01
            </li>
            <li>
              <strong>Location:</strong> Accra, Ghana
            </li>
          </ul>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-bold">Contact</h2>
          <ul className="list-disc pl-4">
            <li>
              <strong>Email:</strong> <a href="mailto:your-email@example.com">your-email@example.com</a>
            </li>
            <li>
              <strong>Phone:</strong> +233 55 123 4567
            </li>
          </ul>
        </div>

        <div className="mt-6">
        <h2 className="text-2xl font-bold">Resume</h2>
        <a
          href="https://example.com/your-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          Download Resume
        </a>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-bold">Languages</h2>
        <ul className="list-disc pl-4">
          <li>English</li>
          <li>Spanish</li>
          <li>French</li>
        </ul>
      </div>

        <div className="mt-6">
          <h2 className="text-2xl font-bold">Skills</h2>
          <ul className="list-disc pl-4">
            <li>JavaScript</li>
            <li>React</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>

      </div>


    </PagesLayout >
  )
}

export default Profile