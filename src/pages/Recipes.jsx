import { useRequestRecipes } from '../api/useRequestRecipes'
import { RecipeItem } from '../components/RecipeItem'
export const Recipes = () => {
  const valueUserId=localStorage.getItem("userID")??"empty"
  console.log(valueUserId)
const {recipes,error}=useRequestRecipes()
  if(error!=null)return (
    <div>Recipes</div>
  )
  return (
    <div className='d-sm-block d-md-flex flex-row' style={{ border: '1px solid grey' }}>
    {recipes.map((recipe, index) => (
      <RecipeItem key={index} {...recipe} index={index} />
    ))}
  </div>
  )
  
}

