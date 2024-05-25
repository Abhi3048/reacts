import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

const Login = () => {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e)=>{
        e.preventDefault()
        setUser({username,password})
    }

  return (
    <div>
        <h2>Login</h2>
        <input type="text"
        value={username}
        onChange={(e)=>setUsername(e.target.value)} 
        placeholder='username'
        className='text-red-400 m-4 ' />
        {" "}
        <input type="password" 
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        placeholder='password' 
        className='text-red-400 m-4 '/>
        <button onClick={handleSubmit} className='bg-orange-400 rounded-lg p-2 m-2'>Submit</button>
    </div>
  )
}

export default Login