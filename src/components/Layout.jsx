import { Outlet } from 'react-router-dom'
import { useStatusLogin } from '../hooks/useStatusLogin'

export const Layout = () => {
  const {cookies,handleLogout}=useStatusLogin();
  console.log(cookies.access_token)
  return (
    <div style={{display:"grid",gridTemplateRows:"0.3fr 1fr" }} className="d-flex-sm">
      <nav className='navbar navbar-expand-sm w-100 '  style={{backgroundColor:"#e3f2fd",marginBottom:"60px"}}>
        <div className='container'>
          <div className='navbar-brand'>
            <img
            src="https://w7.pngwing.com/pngs/949/693/png-transparent-salad-organic-food-recipe-drawing-salad-leaf-vegetable-food-leaf.png"
            style={{width:"50px",height:"50px"}}
            />
            
          </div>
          <button className='navbar-toggler' data-bs-toggle="collapse" data-bs-target="#collapseItem">
              <span className='navbar-toggler-icon' ></span>
          </button>
        <div className='navbar-collapse collapse ' id="collapseItem">
          <div className='navbar-nav w-100' >
             <div className='d-block d-md-flex gap-3'>
             <a  className='nav-link' href="/"><h4>Recipes</h4></a>
             {cookies.access_token ? <><a  className='nav-link' href="/fav-recipes"><h4>FavRecipes</h4></a><a  className='nav-link' href="/add-recipe"><h4>AddRecipe</h4></a> </> :null}
              <div className="nav-item dropdown">
                <a className='nav-link dropdown-toggle' data-bs-toggle="dropdown">
                   List
                  </a>
                <div className="dropdown-menu">
                <a className='dropdown-item'>Item 1</a>
                <a className='dropdown-item'>Item 2</a>
                <a className='dropdown-item'>Item 3</a>
                </div>
              </div>
             </div>
              <div className='d-block d-md-flex ms-md-auto'>
               {cookies.access_token ?
                <button 
                onClick={handleLogout}
                className="btn btn-outline-info ">
                  Logout
                </button>
               :
                  <> <a  className='nav-link' href="/register"><h4>Register</h4></a>
                  <div className='vr fs-3rem'></div>
                  <a className='nav-link' href="/login"><h4>Login</h4></a></>
               }
              </div>
          </div>  
        </div>
        </div>
      </nav>
      <main className='mt-5'>
          <div className='container  '>
          <Outlet/>
          </div>
      </main>
    </div>
  )
}
