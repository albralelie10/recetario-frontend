
import { useLocalStorageRecipes } from "./useLocalFavRecipes";


export const useFavRecipes = () => {

  const [favRecipes,setFavRecipes]=useLocalStorageRecipes("fav-recipes",[])


  const addFavRecipe=(id)=>{
    setFavRecipes(currentList=>{
        if(currentList.find(recipeId=>recipeId==id)==null){
            return [...currentList,id]
        }else{
            return currentList
        }
    })

  }

    return {addFavRecipe,favRecipes}
}
