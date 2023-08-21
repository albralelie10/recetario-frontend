import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
export const useStatusLogin = () => {
    
    const [cookies,setCookies]=useCookies(["access_token"])

    const navigate=useNavigate()

    const handleLogout=()=>{
      setCookies("access_token","")
      localStorage.removeItem("userID")
      navigate("/")
    }
    return {cookies,handleLogout}
}
