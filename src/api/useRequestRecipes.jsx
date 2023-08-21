import { useState,useEffect } from "react";
import axios from "axios";

export const useRequestRecipes = () => {
    const [recipes,setRecipes]=useState([])
    const [error,setError]=useState(null)
    
    const getRecipes = async () => {
        try {
           const res= await axios.get("http://localhost:3000/api/v1/recipes")
          if("recipes" in res.data){
            setRecipes(res.data.recipes)
        }
        } catch (error) {
          setError(error);
        }
      };

      
    useEffect(()=>{
        getRecipes()
    },[])
    
    const addNewRecipe=async(payload)=>{
        try{
            const res=await axios.post("http://localhost:3000/api/v1/recipes",payload)
            return res  
        }catch(error){ 
            return error 
        }

    }
    return {addNewRecipe,recipes,error}
}
