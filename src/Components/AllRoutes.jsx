import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Code from './Code'
import Data from './Data'
import Discussion from './Discussion'
import Ipl from './Ipl'
import Login from './Login'
import Navbar from './Navbar'
import SignUp from './SignUp'

const AllRoutes = () => {
  return (
    <>
    <Navbar />

    <Routes>
      <Route path='/' element={<Ipl/>} />
      <Route path='/data' element={<Data/>} />
      <Route path='/code' element={<Code/>} />
      <Route path='/discussion' element={<Discussion />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
    </Routes>
    </>
  )
}

export default AllRoutes
