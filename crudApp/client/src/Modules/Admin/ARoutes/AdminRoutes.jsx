import React from 'react'
import {Route, Routes} from 'react-router-dom'
import AHome from '../AComponents/AHome'
import Sidebar from '../AComponents/Sidebar'
import ViewUser from '../AComponents/ViewUser'
import AddCategory from '../AComponents/AddCategory'
import ManageCategory from '../AComponents/ManageCateogry'
import ManageProduct from '../AComponents/ManageProduct'
import ManageUser from '../AComponents/ManageUser'
import ViewProduct from '../AComponents/ViewProduct'
import ViewCategory from '../AComponents/ViewCategory'
import UpdateCategory from '../AComponents/UpdateCategory'
const AdminRoutes = () => {
  return (
    <div>
      <Sidebar/>
      <Routes>
        <Route path='/AHome' element={<AHome/>} />
        <Route path='/AddCategory' element={<AddCategory/>} />
        <Route path='/ManageCategory' element={<ManageCategory/>}  />
        <Route path='ManageProduct' element={<ManageProduct/>} />
        <Route path='/ManageUser' element={<ManageUser/>} />
        <Route path='/ViewUser' element={<ViewUser
ViewUser/>} />
        <Route path='/ViewProduct' element={<ViewProduct/>} />
        <Route path='/ViewCategory' element={<ViewCategory/>} />
        <Route path='UpdateCategory/:id' element={<UpdateCategory/>} />
      </Routes>
    </div>
  )
}

export default AdminRoutes