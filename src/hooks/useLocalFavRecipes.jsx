import { useEffect, useState } from "react"

export function useLocalStorageRecipes(key,initialValue){
    const [value,setValue]=useState(()=>{
        const localRecipes=localStorage.getItem("fav-recipes")
        if(localRecipes!==null)return JSON.parse(localRecipes)
        if(typeof initialValue  == "function"){
            return initialValue ;
        }else{
            return initialValue
        }
    })

    useEffect(()=>{
    localStorage.setItem("fav-recipes",JSON.stringify(value))
    },[value,key])
    
    return [value,setValue] 
}