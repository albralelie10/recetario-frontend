import {useRequestRecipes} from "../api/useRequestRecipes"

// eslint-disable-next-line react/prop-types
export const FavRecipeItem = ({id}) => {

    const {recipes}=useRequestRecipes()
    const favRecipe=recipes.find(recipe=>recipe._id==id)
    if(favRecipe==null)return 
    
    return (
    
   <div className='row d-flex align-items-center justify-content-around' style={{border:"1px solid grey",borderRadius:"5px"}}>
     <div className='col-3 p-3 ' >
        <img
        src={favRecipe.imgUrl}
        style={{height:"200px",objectFit:"cover"}}
        />
    </div>
    <div className='col-3'>
    <div> <span className='fs-5 fw-bold'>Receta :</span> <span className='fs-5 ' style={{textTransform:"capitalize"}}>
      {favRecipe.title}</span></div>
    <div> <span className='fs-5 fw-bold'>Tiempo de Cocinado :</span> <span className='fs-5 '>{favRecipe.cookingTime}</span></div>
    <div> <span className='fs-5 fw-bold'>Ingredientes :</span> <i className='fs-5 '>{favRecipe.ingredients}</i></div>
        
    </div>
    <div className='col-3'>
        <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates voluptatibus laboriosam laudantium similique temporibus quasi unde nobis minus enim est. Voluptatem fugiat, qui nisi veritatis velit facere nostrum possimus in.
        </span>
    </div>
    </div>
  )
}
