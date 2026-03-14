const express= require('express')
const {registeruser, getuser, getuserbyid, deleteuser, updateuser}=require('../Controller/user_controller')

const route=express.Router();

route.post('/registeruser', registeruser)
route.get('/getuser', getuser)
route.get('/getuserbyid/:id', getuserbyid)
route.delete('/deleteuser/:id', deleteuser)
route.put('/updateuser/:id', updateuser)

module.exports=route


// product_name,
// product_price,
// product_qty,
// product_descriptiom

// create product_model, create product_controller, create product_routes, add post request in index.js