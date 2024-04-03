import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Layout from './src/layout/Layout'
import Home from './src/main/Home'
import About from './src/main/About'
import Services from './src/main/Services'
import Contact from './src/main/Contact'
import Login from './src/main/Login'
import Register from './src/main/Register'
import PRsctice from './src/main/PRsctice'



const MyRoute = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/services' element={<Services/>}/>
         <Route path='/contact' element={<Contact/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='/register' element={<Register/>}/>
         <Route path='/hooks' element={<PRsctice/>}/>





        </Route>





    </Routes>
    
    
    
    
    
    
    </BrowserRouter>
    
    
    </>
  )
}

export default MyRoute