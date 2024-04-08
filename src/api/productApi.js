import { API } from "./config"


export const getAllProducts=()=>{
    return fetch(`${API}/getproducts`)
    .then(res=>res.json())
    .catch(error=>console.log(error))
}

export const getProductDetails=(id)=>{
      return fetch(`${API}/getproductdetail/${id}`)
      .then(res=>res.json())
      .catch(error=>console.log(error))

}

export const  addProduct=(token,product)=>{
    return fetch(`${API}/addproduct`,{
        method:"POST",
        headers:{
            
            authentication:`${token}`
        },
        body:product
    })
    .then(res=>res.json())
    .catch(error=>console.log(error))
}
export const  updateProduct=(id,token,product)=>{
    return fetch(`${API}/updateproduct/${id}`,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json",
            authentication:`${token}`
        },
        body:product
    })
    .then(res=>res.json())
    .catch(error=>console.log(error))
}
export const  deleteProduct=(id,token)=>{
    return fetch(`${API}/deleteproduct/${id}`,{
        method:"Delete",
        headers:{
            "Content-Type":"application/json",
            "Authorization":`${token}`
        },
        
    })
    .then(res=>res.json())
    .catch(error=>console.log(error))
}











