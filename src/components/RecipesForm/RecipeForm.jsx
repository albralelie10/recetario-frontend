import { useRecipeForm } from '../../hooks/useRecipeForm'
import { InputRecipeForm } from './InputRecipeForm'

// eslint-disable-next-line react/prop-types
export const RecipeForm = ({isRegister=false}) => {
    const {handleSubmit,handleChange,handleAddInstructions,handleChangeInstructions,recipe}=useRecipeForm()
    console.log(recipe)
  return (
    <form 
    onSubmit={(e)=>handleSubmit(e,recipe)}
    className="d-flex  gap-3 " style={{height:"50vh",flexDirection:"column",justifyContent:"center"}}>
      <legend>{isRegister? <h2>Login Form</h2>:<h2>Register Form</h2>}</legend>
       <InputRecipeForm
        title={`Nombre de la Receta:`}
        name="title"
        type="text"
        value={recipe.title}
        placeholder="Add title"
        handleChange={handleChange}
        classInput="form-control"
        classLabel="form-label"
        htmlFor="title-id"
        id="title-id"
       />
        <InputRecipeForm
        title={`Ingredientes:`}
        name="ingredients"
        type="text"
        value={recipe.ingredients}
        placeholder="add Igredient"
        handleChange={handleChange}
        classInput="form-control"
        classLabel="form-label"
        htmlFor="ingredients-id"
        id="ingredients-id"

       />

    {recipe.instructions.map((item,index)=>(
              <InputRecipeForm 
              title={`Instruction #${index+1}`}
              name="instructions"
              type="text"
              value={item}
              placeholder="add Instruction"
              handleChange={(e)=>handleChangeInstructions(e,index)}
              classInput="form-control"
              classLabel="form-label"
              htmlFor="instructions-id"
              id="instructions-id"
              key={index}
              />
            ))}
          <button
          onClick={handleAddInstructions}
          >
          Add Instruction
          </button>

        <InputRecipeForm
        title={`Tiempo de Cocinado:`}
        name="cookingTime"
        type="number"
        value={recipe.cookingTime}
        placeholder="Add cooking time"
        handleChange={handleChange}
        classInput="form-control"
        classLabel="form-label"
        htmlFor="cookingtime-id"
        id="cookingtime-id"
        
        
       />
        <InputRecipeForm
        title={`Imagen Url:`}
        name="imgUrl"
        type="text"
        value={recipe.imgUrl}
        placeholder="Add url image"
        handleChange={handleChange}
        classInput="form-control"
        classLabel="form-label"
        htmlFor="image-id"
        id="image-id"
       />
       
        <button 
        type="submit"
        className='btn btn-outline-info'>
          Create Recipe
        </button> 
    </form>
  )
}
