import React from 'react'
import { Link } from 'react-router-dom';
import "./Login.css";

function Login() {

  function log() {
    alert("Login Successful")
  }

  return (
    <div className='inputDiv'>
      
      <input type="email" placeholder='Email Address' />
      <input type="password" placeholder='Password' />
      <Link to="/code"><button className='Lbtn' onClick={log}>Login</button></Link>
    </div>
  )
}

export default Login