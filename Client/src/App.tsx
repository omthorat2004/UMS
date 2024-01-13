import { useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import { Home, Login } from './pages'

const router = createBrowserRouter([
  {path:'/',element:<Home/>},
  {path:'/login',element:<Login/>}
])
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
