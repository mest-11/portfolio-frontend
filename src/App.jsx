
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Landing from './pages/landing'

import Signup from './pages/signup'
import Preview from './pages/preview'
import Dashboard from './pages/dashboard'

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
    element: <Dashboard/>  
  },
])
  return (
    <>
      
       <RouterProvider router={router}/> 
    </>
  )
}

export default App
