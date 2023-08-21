import axios from "axios"
export const useRequestUser = ()=> {

  const addUser=async(payload)=>{
      try{
        const {data}=await axios.post("http://localhost:3000/api/v1/register",payload)
        return data
      }catch(error){
        return error  
      } 
  }
  const userLogin=async(payload)=>{
    try{
      const {data}=await axios.post("http://localhost:3000/api/v1/login",payload)
      return data
    }catch(error){
      return error 
    }
  }

  return {addUser,userLogin}
}

