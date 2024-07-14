
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Landing from './pages/landing'
import Signin from './pages/signin'
import Signup from './pages/signup'
import Preview from './pages/preview'
import Dashboard from './pages/dashboard'
import Resume from './pages/preview/resume'
import Projects from './pages/preview/projects'
import Contact from './pages/preview/contact'

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
    element: <Dashboard/>  
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
