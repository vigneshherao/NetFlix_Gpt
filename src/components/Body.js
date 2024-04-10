import React from 'react'
import Browse from "./Browse"
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Login'
import Watch from './Watch'


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