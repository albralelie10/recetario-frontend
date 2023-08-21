import { FavRecipeItem } from '../components/FavRecipeItem'
export default function FavRecipes() {
  const favRecipes=localStorage.getItem("fav-recipes") 
  const show=favRecipes? JSON.parse(favRecipes):null
  
  function handleDeleteRecipes(){
    localStorage.removeItem("fav-recipes")
    window.location.reload()
  }

 
  if(show==null || show.length<=0)return <h1>Empty Fav Repository</h1>
  else{
    return (
      <div className='row gap-3 '>
          {show.map((recipe,index)=>(<FavRecipeItem id={recipe} key={index}/>))}
          <div>
            <button
            className='btn btn-outline-danger w-100'
            onClick={handleDeleteRecipes}
            >
              <h4>Borrar Favoritos</h4>
            </button>
          </div>
      </div>
    )
  }
}
