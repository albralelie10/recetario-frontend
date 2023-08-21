import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import { Layout } from './components/Layout'
import { Recipes } from './pages/Recipes'
import FavRecipes from './pages/FavRecipes'
import { AddRecipes } from './pages/AddRecipes'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { ProtectedRoutes } from './components/ProtectedRoutes'
import { GlobalContextProvider } from './ctx/GlobalContext'
const router=createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        index:true,
        element:<Recipes/>
      },{
        element:<ProtectedRoutes/>,
        children:[
          {
            path:"/fav-recipes",
            element:<FavRecipes/>
          },{
            path:"/add-recipe",
            element:<AddRecipes/>
          }
        ]
        
      },{
        path:"/login",
        element:<Login/>
      },{
        path:"/register",
        element:<Register/>
      }
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <GlobalContextProvider>
 <RouterProvider router={router}/>
 </GlobalContextProvider>
  </React.StrictMode>,
)
