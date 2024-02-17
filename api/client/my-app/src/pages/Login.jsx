import React, { useContext } from 'react'
import axios from "axios"
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/authContext'

const Login = () => {
 
  const [inputs, setInputs] = useState({
    username:" ",
    password:" "
  });

  const [err, setError] = useState(null)
  const navigate = useNavigate();
  const { login } = useContext(AuthContext)


  const handleChange = (e) =>{
    setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
  }

  const handleSubmit = async e =>{
    e.preventDefault();
    try {
      // console.log(inputs)
    login(inputs)
    navigate("/")

    }catch(err){
      setError(err.response.data)
    }
  }

  return (
    <div className='auth'>
        <h1>Login</h1>

        <form action="">
            <input type="text" name="username" placeholder='username' onChange={handleChange}/>
            <input type="text" name= "password" placeholder='password' onChange={handleChange}/>
            <button onClick={handleSubmit}>Login</button>
            {err && <p>{err}</p>}
            <span>Don't have an account? <Link to="/register">Register</Link></span>
        </form>
    </div>
  )
}

export default Login