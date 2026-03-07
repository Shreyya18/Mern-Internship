import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom' 
import UserRoutes from './Modules/User/URoutes/UserRoutes'
import AdminRoutes from './Modules/Admin/ARoutes/AdminRoutes'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<UserRoutes/>} />
          <Route path='/Admin/*' element={<AdminRoutes/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App