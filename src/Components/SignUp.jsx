import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {

  function sin() {
    alert("SignUp Successful")
  }

  return (
    <div>
      <br />
      <input type="text" placeholder='Name' required /><br /><br />
      <input type="email" placeholder='enter email' required /> <br /><br />
      <input type="password" placeholder='password' required /><br /><br />
      <input type="password" placeholder='conform password' required /> <br /><br />
      <Link to="/data"><button className='Lbtn' onClick={sin}>SignUp</button></Link>
    </div>
  )
}

export default SignUp
