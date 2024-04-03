import React, { useEffect, useState } from 'react'




const PRsctice = () => {
    let [counter,setCounter]=useState
    (0)
    
    
    

    // useEffect()
  return (
    <>
    <h1>Counter:{counter}</h1>
    <button onClick={handleclick=>setCounter(counter+1) } >Increase</button>
    <button onClick={setCount=>setCounter(counter-1)}>decrease</button>
    </>
  )
}

export default PRsctice