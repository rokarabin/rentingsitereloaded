import { API } from "./config"

export const register=(username,email,password)=>{
    let user={username,email,password}
    
    return fetch(`${API}/register`<{
        method:"POST",
        headers:{
            "Content-Type":"application/json" 
        },
        body:JSON.stringify(user)
    })
    .then(res=>res.json())
    .catch(error=>console.log(error))
}

export const verifyEmail=(token)=>{
    return fetch(`${API}/verifyemail/${token}`)
    .then(res=>res.json())
    .catch(error=>console.log(error))
}

export const login=(email,password)=>{
    let user={email,password}
    
    return fetch(`${API}/login`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(user)
    })
    .then(res=>res.json())
    .catch(error=>console.log(error))
}

export const authenticate = (userinfo) => {
    return localStorage.setItem('jwt', JSON.stringify(userinfo))
}

export const isAuthenticate=()=>{
if(localStorage.getItem('jwt')){
    return JSON.parse(localStorage.getItem('jwt'))
}
else{
    return false
}

}

export const forgetPassword=(email)=>{
    return fetch(`${API}/forgetpassword`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(email)
    })
    .then(res=>res.json())
    .catch(error=>console.log(error))
}

export const resetpassword=(password,token)=>{
    return fetch(`${API}/resetpassword/${token}`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({password})

    })
    .then(res=>res.json())
    .catch(error=>console.log(error))

}

export const resendVerification=(email,password)=>{
    let user={email,password}
    return fetch(`${API}/resendverification`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({user})

    })
    .then(res=>res.json())
    .catch(error=>console.log(error))
}

export const logOut=()=>{
    localStorage.removeItem('jwt')
    return fetch(`${API}/logout`)
    .then(res=>res.json())
    .catch(error=>console.log(error))
}

export const getUserlist = () => {
    return fetch(`${API}/getallusers`)
        .then(res => res.json())
        .catch(error => console.log(error))
}

export const updateRole=(id,role)=>{
    return fetch(`${API}/updaterole/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
            
        },
        body: JSON.stringify({role})
    })
        .then(response => response.json())
        .catch(error => console.log(error))
}


