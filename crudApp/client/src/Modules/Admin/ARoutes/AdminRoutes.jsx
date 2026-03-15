import React from 'react'
import {Route, Routes} from 'react-router-dom'
import AHome from '../AComponents/AHome'
import Sidebar from '../AComponents/Sidebar'
import ViewUser from '../AComponents/ViewUser'
const AdminRoutes = () => {
  return (
    <div>
      <Sidebar/>
      <Routes>
        <Route path='/AHome' element={<AHome/>} />
        <Route path='/ViewUser' element={<ViewUser
ViewUser/>} />
      </Routes>
    </div>
  )
}

export default AdminRoutes