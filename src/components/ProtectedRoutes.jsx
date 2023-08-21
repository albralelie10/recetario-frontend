import { useStatusLogin } from '../hooks/useStatusLogin'
import { Outlet } from 'react-router-dom'

export const ProtectedRoutes = () => {
    const {cookies}=useStatusLogin()
    console.log(cookies.access_token)
    if(!cookies.access_token)return <h1>Access Permision Denied</h1>
    else{
        return (
            <div>
            <Outlet/>    
            </div>
          )
    }
}
