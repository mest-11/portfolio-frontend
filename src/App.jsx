
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Landing from './pages/landing'
import Signin from './pages/signin'
import Signup from './pages/signup'
import Preview from './pages/preview'
import DashBoardLayout from './pages/dashboard/Layout/DashBoardLayout'
import Overview from './pages/dashboard/pages/overview'
import Skills from './pages/dashboard/pages/skills'
import Projects from './pages/dashboard/pages/projects'
import Expericence from './pages/dashboard/pages/experience'
import Bio from './pages/dashboard/pages/bio'
import SocialMediaAccount from './pages/dashboard/pages/social'
import Achievements from './pages/dashboard/pages/achievements'

function App() {

const router = createBrowserRouter([
  { path: '/',
    element: <Landing/>  
  },
  { path: '/',
    element: <Landing/>  
  },
  { path: '/signin',
    element: <Signin/> 
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
        path:"projects",
        element:<Projects/>
      },
      {
        path:"experience",
        element:<Expericence/>
      },
      {
        path:"bio",
        element:<Bio/>
      },
      {
        path:"social",
        element:<SocialMediaAccount/>
      },
      {
        path:"achievements",
        element:<Achievements/>
      }
    ],
     
  },

])
  return (
    <>
      
       <RouterProvider router={router}/> 
    </>
  )
}

export default App
