import React from 'react'
import Browse from "./Browse"
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Login'
import { getAuth,onAuthStateChanged } from "firebase/auth";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Body = () => {
    const dispatch = useDispatch();
    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        }
    ])


    useEffect(()=>{
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
          if (user) {
            const {displayName,uid,email,photoURL} = user;
            dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
          } else {
            removeUser();
          }
        });
    },[])

  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body