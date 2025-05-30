import React from 'react'
import { Outlet } from 'react-router-dom'
import "../Styles/AuthLayout.css"

function AuthLayout() {
  return (
    <div className='background-auth'>
        <div className='w-[30%] ml-auto h-full bg-white'>
             <Outlet/>
        </div>
        
    </div>
  )
}

export default AuthLayout