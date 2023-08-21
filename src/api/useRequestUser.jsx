import axios from "axios"
export const useRequestUser = ()=> {

  const addUser=async(payload)=>{
      try{
        const {data}=await axios.post("https://recetario-api.vercel.app/register",payload)
        return data
      }catch(error){
        return error  
      } 
  }
  const userLogin=async(payload)=>{
    try{
      const {data}=await axios.post("https://recetario-api.vercel.app/login",payload)
      return data
    }catch(error){
      return error 
    }
  }

  return {addUser,userLogin}
}

