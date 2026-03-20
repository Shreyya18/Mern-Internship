const express = require('express');
const {addproduct, getproduct, getproductbyid} = require('../Controller/product_controller')

const route = express.Router();

route.post('/addproduct', addproduct);
route.get('/getproduct', getproduct)
route.get('/getproductbyid/:id', getproductbyid)
module.exports = route;