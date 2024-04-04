import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  let [email,setEmail]=useState('')
  let [password,setPassword]=useState('')
  let [username,setUsername]=useState('')

  return (
    <>
<div className="container-fluid h-3/4 flex justify-center items-center ">
        <div className="mx-auto px-5 py-8 border my-5 rounded-lg shadow-lg lg:w-4/12 md:w-8/12 sm:w-10/12 h-3/6">
          <form className='form-group  ' sx={{ border: '3px gray solid', padding: 5 }}>
            
<div className="emaildiv mx-auto  flex flex-col mb-5 justify-center">

            <label for="username" className='text-lg font-serif font-bold'>Username:</label>
            <input type="text" className="form-control text-lg h-8 w-full px-3 mt-1 mb-2 rounded-lg" id="username"  onChange={(event) => {
              setUsername(event.target.value)
            }} required />
</div>
<div className="emaildiv mx-auto flex flex-col mb-5 justify-center">

            <label for="email" className='text-lg font-serif font-bold '>Email:</label>
            <input type="email" className="form-control rounded-lg h-8 " id="email" placeholder="name@example.com" onChange={(event) => {
              setEmail(event.target.value)
            }} required/>
</div>
<div className="emaildiv mx-auto flex flex-col mb-5 justify-center">

            <label for="password" className='text-lg font-serif font-bold'>Password:</label>
            <input type="text" className="form-control rounded-lg h-8" id="password" onChange={(event) => {
              setPassword(event.target.value)
            }} required/>
</div>

            <div className="con py-3 mx-auto ">

              <button className="w-full py-3 bg-blue-500 text-white rounded-lg " type="submit" >Register</button>
            </div>
            
          </form>
        </div>
       
      </div>

  
    </>
  )
}

export default Register