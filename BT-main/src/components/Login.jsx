

import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Login() {
  
  let Navigate = useNavigate()
  
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <div className='w-full max-w-5xl h-[71vh] flex shadow-2xl rounded-md overflow-hidden'>
        <div className='w-1/2 h-full bg-white rounded-l-md'>
          <img className='w-full h-full object-cover' src='https://img.freepik.com/premium-vector/group-paper-shopping-bag-shopping-cart_37787-553.jpg' alt='Login' />
        </div>
        <div className='w-1/2 h-full bg-white rounded-r-md p-10'>
          <h2 className='text-3xl font-bold text-center mb-10'>Sign In</h2>
          <form>
            <label htmlFor='username' className="block font-medium text-2xl text-gray-600 mb-2">Username</label>
            <input type='email' placeholder='email' className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-6" />
            <label htmlFor='password' className="block font-medium text-2xl text-gray-600 mb-2">Password</label>
            <input type='password' placeholder='password' className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-8" />
            <button type='submit' className="w-full border border-gray-300 rounded-md px-4 py-2 bg-yellow-300 text-2xl hover:bg-yellow-400 transition-colors">Submit</button>
            <button className="w-full border border-gray-300 rounded-md px-4 py-2 mt-5 transition-colors" onClick={()=>Navigate("/SignUp")}>create your Bold Threads accounts</button>
          </form>
        </div>
      </div>
    </div>
  )
}