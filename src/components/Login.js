import React from 'react'
import Head from './Head'

const Login = () => {
  return (
    <div>
        <Head/>
        <div className='absolute w-full h-full'>
            <img className="object-cover w-full h-full brightness-50" src='https://preview.redd.it/how-can-someone-make-this-background-with-html-and-css-i-v0-zjgs096khv591.jpg?width=1080&crop=smart&auto=webp&s=5ec8b5f14222e27eecd19b9f5428793bcc857b58' alt='background'></img>
        </div>
        <div className="md:rounded-lg bg-opacity-60 absolute sm:w-4/5 md:w-6/12 lg:min-w-[300px] lg:w-1/4 text-white p-12 bg-black flex flex-col justify-center items-center m-auto my-36 right-0 left-0">
          <h2 className='p-4 text-3xl text-left'>Sign In</h2>
          <input type="text" placeholder='Email Address' className="w-full p-4 m-2 my-4 bg-gray-800" />
          <input type="Password" placeholder='Password' className="w-full p-4 m-2 my-4 bg-gray-800" />
          <button type='button' className='w-full bg-red-700 p-4 font-semibold rounded-md m-4'>Sign In</button>
          <div>
            <input type='checkbox'></input>
            <label className='ml-2 my-2'>Remember me</label>
          </div>
          <p className='cursor-pointer hover:underline mt-2'>New to Netflix? Sign up now</p>
          <p className='text-sm m-2 text-blue-300 text-center'>This page is protected by Google reCAPTCHA to ensure you're not a bot</p>
        </div>

    </div>
  )
}

export default Login