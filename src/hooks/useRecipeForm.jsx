import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRequestRecipes } from '../api/useRequestRecipes'
export const useRecipeForm = () => { 

    let userId=localStorage.getItem("userID")??""
    if(userId)userId=JSON.parse(userId)
    const navigate=useNavigate()
    
    const [recipe,setRecipe]=useState({
        title:"",
        ingredients:"",
        instructions:[],
        cookingTime:0,
        imgUrl:"",
        userOwner:userId
    })

    const {addNewRecipe}=useRequestRecipes()
    
    const handleChange=(e)=>{
        const {value,name}=e.target
        setRecipe({
            ...recipe,
            [name]:name=="cookingTime" ? Number(value):value
        })
    }
    const handleSubmit=async(e,payload)=>{

        e.preventDefault()
        const res=await addNewRecipe(payload)
        if("recipe" in res  && res){
        
            alert(`Receta creada con exito¡¡¡`)
            navigate("/")
        }else{
            alert(`Hubo un error ${res.msg}`)
        }
    }
    const handleAddInstructions=(e)=>{
        e.preventDefault()
        setRecipe({
            ...recipe,
            instructions:[...recipe.instructions,""]
        }
        )
    }
    
    const handleChangeInstructions=(e,index)=>{
        const {value}=e.target
        const copyArr=recipe.instructions
        copyArr[index]=value
        setRecipe({
            ...recipe,
            instructions:[...copyArr]
        })
    }
    
    return {handleAddInstructions,handleSubmit,handleChangeInstructions,handleChange,recipe}
}
