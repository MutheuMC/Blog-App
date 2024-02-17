import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Register = () => {

  const [inputs, setInputs] = useState({
    username:" ",
    email:" ",
    password:" "
  });

  const [err, setError] = useState(null)

  const handleChange = (e) =>{
    setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
    
  }
  const navigate = useNavigate();
  const handlesubmit = async e =>{
    e.preventDefault();

    try {
    await axios.post("http://localhost:8000/api/auth/register", inputs)
    navigate('/login')
    

    }catch(err){
      setError(err.response.data)
    }
    
  }

  return (
    <div className='auth'>
        <h1>Register</h1>

        <form action="">
            <input required type="text" name ='username' placeholder='username' onChange={handleChange}/>
            <input  required type="email" name = 'email' placeholder='email' onChange={handleChange} />
            <input required type="text" name= 'password' placeholder='password' onChange={handleChange} />
            <button onClick={handlesubmit}>Register</button>
            { err && <p> { err }</p>}
            <span>Already have an account? <Link to="/login">Login</Link></span>
        </form>
    </div>
  )
}

export default Register