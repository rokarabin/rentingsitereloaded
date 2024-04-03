import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>

<div className =" divmain flex flex-wrap items-center justify-between mx-auto p-3 list-none bg-slate-500 text-xl">
        
        <div className =" flex  font-bold gap-3 justify-center pl-6">
         <img src="/image/projecticon.jpg" className='w-3/4 h-10'/>
          <li>Name</li>
        </div>
        <div className =" flex justify-center text-black font-bold gap-6 w-1/4 ">
          <Link to={'/'}>Home</Link>
          <Link to={'/about'}>About</Link>
          <Link to={'/services'}>Services</Link>
          <Link to={'/contact'}>Contact</Link>
        </div>
        <div className = " flex  text-white gap-6 w-1/4">
        <Link to={'/login'}>Login</Link>
            
            <Link to={'/register'}>Register</Link>
        </div>
      
      </div>




    </>
  )
}

export default Navbar