import React from 'react'
import {Route, Routes} from 'react-router-dom'
import UHome from '../UComponents/UHome'
import Topbar from '../UComponents/Topbar'

const UserRoutes = () => {
  return (
    <div>
      <Topbar/>
        <Routes>
            <Route path='/UHome' element={<UHome/>} />
        </Routes>
    </div>
  )
}

export default UserRoutes