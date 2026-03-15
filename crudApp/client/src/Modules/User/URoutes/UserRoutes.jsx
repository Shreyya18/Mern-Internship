import React from 'react'
import {Route, Routes} from 'react-router-dom'
import UHome from '../UComponents/UHome'
import Topbar from '../UComponents/Topbar'
import Register from '../UComponents/Register'
import UAbout from '../UComponents/UAbout'

const UserRoutes = () => {
  return (
    <div>
      <Topbar/>
        <Routes>
            <Route path='/Home' element={<UHome/>} />
            <Route path='/About' element={<UAbout/>}/>
            <Route path='/Register' element={<Register/>} />
            <Route path='/' element={<UHome/>} />
        </Routes>
    </div>
  )
}

export default UserRoutes