import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  let [email,setEmail]=useState('')
  let [password,setPassword]=useState('')

  return (
    <>
<div className="container-fluid h-3/4 flex justify-center items-center ">
        <div className="mx-auto px-5 py-8 border my-5 rounded-lg shadow-lg lg:w-4/12 md:w-8/12 sm:w-10/12 h-3/6">
          <form className='form-group  ' sx={{ border: '3px gray solid', padding: 5 }}>
<div className="emaildiv mx-auto flex flex-col justify-center">

            <label for="email" className='text-lg font-serif font-bold'>Email:</label>
            <input type="email" className="form-control rounded-lg h-8" id="email" placeholder="name@example.com" onChange={(event) => {
              setEmail(event.target.value)
            }} />
</div>
<div className="emaildiv mx-auto flex flex-col justify-center">

            <label for="password" className='text-lg font-serif font-bold '>Password:</label>
            <input type="text" className="form-control rounded-lg h-8" id="password" onChange={(event) => {
              setPassword(event.target.value)
            }} />
</div>

            <div className="con py-3 mx-auto ">

              <button className="w-full py-3 bg-blue-500 text-white rounded-lg " type="submit" >login</button>
            </div>
            <div className="text-center flex justify-between">
            <Link to="/register">Don't have an account? Click to register</Link>
            <br />
            <Link to="/forgetpassword">Forget Password</Link>
            <br />
            <Link to="/resendverification">Resend verification</Link>
          </div>
          </form>
        </div>
       
      </div>

  
    </>
  )
}

export default Login