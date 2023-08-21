import { useState,useEffect } from "react";
import axios from "axios";

export const useRequestRecipes = () => {
    const [recipes,setRecipes]=useState([])
    const [error,setError]=useState(null)
    
    const getRecipes = async () => {
        try {
           const res= await axios.get("https://recetario-api.vercel.app/recipes")
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
            const res=await axios.post("https://recetario-api.vercel.app/recipes",payload)
            return res  
        }catch(error){ 
            return error 
        }

    }
    return {addNewRecipe,recipes,error}
}
