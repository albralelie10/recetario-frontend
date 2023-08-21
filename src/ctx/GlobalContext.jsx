import {  createContext, useContext } from "react";
import { useFavRecipes } from "../hooks/useFavRecipes";


const GlobalContext=createContext({})
    
// eslint-disable-next-line react/prop-types
export const GlobalContextProvider=({children})=>{
        const {addFavRecipe,favRecipes}=useFavRecipes()
  
        return <GlobalContext.Provider value={{addFavRecipe,favRecipes}}>
            {children}
        </GlobalContext.Provider>
}   

export const useGlobalContext=()=>{
    return useContext(GlobalContext)
}