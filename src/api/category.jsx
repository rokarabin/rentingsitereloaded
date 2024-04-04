const { API } = require("../config")



exports.getAllCategories=()=>{
    return fetch(`${API}/getallcategory`)
    .then(res=>res.json())
    .catch(error=>console.log(error))
}