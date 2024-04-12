import React from 'react'
import Browse from "./Browse"
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './login/Login'
import Watch from './videoComponents/Watch'


const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        },
        {
            path:"/watch",
            element:<Watch/>
        }
    ])

  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body