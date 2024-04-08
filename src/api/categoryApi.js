import { API } from "./config"

export const getAllcategory=async ()=>{
     const response=await fetch(`${API}/getallcategory`)
    .then(response=>response.json())
    .catch(error=>console.log(error))

}

export const getCategoryDetails= (id)=>{
        return fetch(`${API}/getcategorydetails/${id}`)
        .then(response=>response.json())
        .catch(error=>console.log(error))
}

export const addCategory=async (category_name,token)=>{
    let categories={category_name}
    return fetch(`${API}/addcategory`,{
        method:"POST",
        headers:{
            "Content-Type":"Application/json",
            "Authorization":`${token}`
        },
        body : JSON.stringify({category_name})
    })
    .then(response=>response.json())
    .catch(error=>console.log)

}

export const editcategory=(id,category_name,token)=>{

    return fetch(`${API}/updatecategory/${id}`,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json",
            "Authorization":`${token}`
        },
        body:JSON.stringify({category_name})
    })
    .then(response=>response.json())
    .catch(error=>console.log(error))
}

export const deletecategory=(id,token)=>{
    return fetch(`${API}/deletecategory/${id}`,{
        method:"Delete",
        headers:{
            "Content-Type":"appilcation/json",
            "Authorization":`${token}`
        }
    })
    .then(response=>response.json())
    .catch(error=>console.log(error))
}
