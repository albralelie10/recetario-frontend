import {  useState } from 'react'
import { useRequestUser } from '../api/useRequestUser'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'

export const useAuthForm = (isRegister) => {
    const [_,setCookies]=useCookies(["access_token"])

    const [auth,setAuth]=useState({
        username:"",
        password:""
    })
    
    const {addUser,userLogin}=useRequestUser()
    const navigate=useNavigate()

    const handleChange=(e)=>{
        const {value,name}=e.target
        setAuth({
            ...auth,
            [name]:value
        })
    }
    const handleSubmit=async(e)=>{
        e.preventDefault()
        if(isRegister){
          const res=await userLogin(auth)
          console.log(res)
          if("user" in res){  
            localStorage.setItem("userID",JSON.stringify(res.user.userID))
            setCookies("access_token",res.user.token)
            alert(`Usuario autenticado con exito¡¡¡`)
            navigate("/")
          }else{
            alert(`${res.msg}`)
          }
        }else{
            const res=await addUser(auth)
            if("user" in res){
                alert(`Usuario registrado con exito¡¡¡`)
                navigate("/register")
            }else{
                alert(`${res.msg}`)         
            }
        }
    }

    return {handleChange,handleSubmit,auth}
}
