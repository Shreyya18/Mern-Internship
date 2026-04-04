import React from 'react'
import {Route, Routes, useLocation} from 'react-router-dom'
import UHome from '../UComponents/UHome'
import Topbar from '../UComponents/Topbar'
import Register from '../UComponents/Register'
import UAbout from '../UComponents/UAbout'
import AddProduct from '../UComponents/AddProduct'
import Products from '../UComponents/Products'
import Login from '../UComponents/Login'
import MyProfile from '../UComponents/MyProfile'

function AppContent(){
  const location = useLocation();
  const hidetopbar = ['/Login', "/Register"]
  return (
    <div>
      {
        !hidetopbar.includes(location.pathname) && <Topbar/>}
         <Routes>
            <Route path='/' element={<UHome/>} />
            <Route path='/About' element={<UAbout/>}/>
            <Route path='/Register' element={<Register/>} />
            <Route path='/Login' element={<Login/>} />
            <Route path='/AddProduct' element={<AddProduct/>} />
            <Route path='/Products' element={<Products/>} />
            <Route path='/MyProfile' element={<MyProfile/>} />
        </Routes>
      
    </div>
  )
}

const UserRoutes = () => {
  return (
    <div>
       <AppContent/>
    </div>
  )
}

export default UserRoutes