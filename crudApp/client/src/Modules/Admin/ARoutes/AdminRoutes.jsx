import React from 'react'
import {Route, Routes} from 'react-router-dom'
import AHome from '../AComponents/AHome'
import Sidebar from '../AComponents/Sidebar'
const AdminRoutes = () => {
  return (
    <div>
      <Sidebar/>
      <Routes>
        <Route path='/AHome' element={<AHome/>} />
      </Routes>
    </div>
  )
}

export default AdminRoutes