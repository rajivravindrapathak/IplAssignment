import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Code from './Code'
import Data from './Data'
import Discussion from './Discussion'
import Navbar from './Navbar'

const AllRoutes = () => {
  return (
    <>
    <Navbar />

    <Routes>
      <Route path='/' element={<Data/>} />
      <Route path='/code' element={<Code/>} />
      <Route path='/discussion' element={<Discussion />} />
    </Routes>
    </>
  )
}

export default AllRoutes
