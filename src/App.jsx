
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Landing from './pages/landing'

import Signup from './pages/signup'
import Preview from './pages/preview'
import DashBoardLayout from './pages/dashboard/Layout/DashBoardLayout'
import Skills from './pages/dashboard/pages/skills'
import Projects from './pages/dashboard/pages/projects'
import Expericence from './pages/dashboard/pages/experience'
import Achievements from './pages/dashboard/pages/achievements'
import AddSkill from './pages/dashboard/pages/AddSkill'
import AddProject from './pages/dashboard/pages/AddProject'
import AddExperience from './pages/dashboard/pages/AddExperience'
import Education from './pages/dashboard/pages/education'
import AddBio from './pages/dashboard/pages/AddBio'
import AddAchievement from './pages/dashboard/pages/AddAchievement'
import AddEducation from './pages/dashboard/pages/AddEducation'
import Bio from './pages/dashboard/pages/bio'
import Overview from './pages/dashboard/pages/overview'
import Dashboard from './pages/dashboard'
import Resume from './pages/preview/resume'
import Projects from './pages/preview/projects'
import Contact from './pages/preview/contact'
import LogIn from './pages/logIn'

function App() {

const router = createBrowserRouter([
  { path: '/',
    element: <Landing/>  
  },
  { path: '/',
    element: <Landing/>  
  },
  { path: '/login',
    element:<LogIn/>
  },
  { path: '/signup',
    element: <Signup/> 
  },
  { path: '/preview',
    element: <Preview/>  
  },
  { path: '/dashboard',
    element: <DashBoardLayout/>,  
    children:[
       {
        index:true,
        element:<Overview/>
      },
      {
        path:"skills",
        element:<Skills/>
      },
      {
        path:"/dashboard/skills/add-skill",
        element:<AddSkill/>
      },
      {
        path:"projects",
        element:<Projects/>
      },
      {
        path:"/dashboard/project/add-project",
        element:<AddProject/>
      },
      {
        path:"experience",
        element:<Expericence/>
      },
      {
        path:"/dashboard/experience/add-experience",
        element:<AddExperience/>
      },
      {
        path:"education",
        element:<Education/>
      },
      {
        path:"/dashboard/education/add-education",
        element:<AddEducation/>
      },
      {
       path:"bio",
       element:<Bio/>
      },
      {
        path:"/dashboard/bio/add-bio",
        element:<AddBio/>
      },
      {
        path:"achievements",
        element:<Achievements/>
      },
      {
        path:"/dashboard/achievements/add-achievement",
        element:<AddAchievement/>
      },
      // {
      //   path:"/dasboard/volunteering/add-volunteering",
      //   element:<AddVolunteering/>
      // }
    ],  
  },
  { path: '/resume',
    element: <Resume/>  
  },
  { path: '/projects',
    element: <Projects/>
  },
  { path: '/contact',
    element: <Contact/> 
  },
])
  return (
    <>
      
       <RouterProvider router={router}/> 
    </>
  )
}

export default App
