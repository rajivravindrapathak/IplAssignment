import React from 'react'
import { Link } from 'react-router-dom';
import "./Login.css";

function Login() {
  return (
    <div className='inputDiv'>
      
      <input type="email" placeholder='Email Address' />
      <input type="password" placeholder='Password' />
      <Link to={`/data`}><button className='Lbtn'>Login</button></Link>
    </div>
  )
}

export default Login