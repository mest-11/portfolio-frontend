
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Landing from './pages/landing'
import Signin from './pages/signin'
import Signup from './pages/signup'
import Preview from './pages/preview'
import Dashboard from './pages/dashboard'

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
])
  return (
    <>
      
       <RouterProvider router={router}/> 
    </>
  )
}

export default App
