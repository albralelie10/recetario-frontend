import { useGlobalContext } from '../ctx/GlobalContext'
export const RecipeItem = (props) => {
  // eslint-disable-next-line react/prop-types
  const {title,cookingTime,imgUrl,ingredients,instructions,index,_id}=props
  
  const {addFavRecipe,favRecipes}=useGlobalContext()
  console.log(favRecipes)
  return (
    <div className='col-md-4 col-sm-12'>
        <div className="card h-100">
           <div className="card-header">
           <div className='card-img'>
                <img
                className='d-block w-100'
                src={imgUrl}
                style={{height:"400px",objectFit:"cover"}}
                />
              <div className='accordion-title d-flex justify-content-around bg-info'>
                  <span className='fs-3 fw-bold' style={{textTransform:"capitalize"}}>{title}</span>
                  <span className='fs-3 fw-bold'>{cookingTime}</span>
              </div>
            </div>
           </div>
            <div className="card-body">
                <div className='accordion accordion-start'>
                    <div className="accordion-item">
                          <div className='accordion-header'>
                            <button className="accordion-button" data-bs-toggle="collapse" data-bs-target={`#collapseExample${index}`}>
                              
                            </button>
                          </div>
                          <div className='accordion-collapse collapse show' id={`collapseExample${index}`}>
                            <div className="accordion-body">
                              <span className='fs-4 fw-bold'>Ingredients:</span>
                              <i className='fs-4'>{ingredients}</i>
                             <div>
                             <span className='fs-4 fw-bold'>
                                Instructions:
                              </span>
                              <ol className='fs-4'>
                                {instructions.map(inst=><li 
                                key={inst}><span style={{textTransform:"capitalize"}}>{inst.toLocaleLowerCase()}</span></li>)}
                              </ol>
                             </div>
                            </div>
                          </div>
                    </div>
                </div>
            </div>
            <button className='btn btn-success w-70 m-2 p-2'
            onClick={()=>addFavRecipe(_id)}
            ><h4>Add To Favs</h4></button>
        </div>
    </div>
  )
}
