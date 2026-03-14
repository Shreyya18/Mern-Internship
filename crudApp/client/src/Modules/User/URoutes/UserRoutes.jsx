import React from 'react'
import {Route, Routes} from 'react-router-dom'
import UHome from '../UComponents/UHome'
import Topbar from '../UComponents/Topbar'
import Register from '../UComponents/Register'

const UserRoutes = () => {
  return (
    <div>
      <Topbar/>
        <Routes>
            <Route path='/UHome' element={<UHome/>} />
            <Route path='/' element={<Register/>} />
        </Routes>
    </div>
  )
}

export default UserRoutes