import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <div>
      <Link to="/data">Data</Link>
      <Link to="code" >Code</Link>
      <Link to="discussion">Discussion</Link>
    </div>
  )
}

export default Navbar
