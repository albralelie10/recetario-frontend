import { useAuthForm } from '../hooks/useAuthForm'
// eslint-disable-next-line react/prop-types
export const FormAuth = ({isRegister=false}) => {
  const {handleChange,handleSubmit,auth}=useAuthForm(isRegister)
  return (
    <form 
    onSubmit={handleSubmit}
    className="d-flex  gap-3 " style={{height:"50vh",flexDirection:"column",justifyContent:"center"}}>
      <legend>{isRegister? <h2>Login Form</h2>:<h2>Register Form</h2>}</legend>
        <label htmlFor="user" className='form-label' >
          <h4>Username:</h4>
        </label>
        <input
        className='form-control'
        id="user"
        placeholder='Add username'
        type="text"
        name='username'
        value={auth.username}
        onChange={handleChange}
        />
        <label htmlFor="pass" className='form-label'>
          <h4>Password:</h4>
        </label>
        <input
        className='form-control'
        id="pass"
        placeholder='Add username'
        type="text"
        name='password'
        value={auth.password}
        onChange={handleChange}
        />
        <button 
        type="submit"
        className='btn btn-outline-info'>
          {isRegister ? <h4>Login</h4>:<h4>Register</h4>}
        </button>
    </form>
  )
}
