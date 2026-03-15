const express = require('express');
const {addproduct} = require('../Controller/product_controller')

const route = express.Router();

route.post('/addproduct', addproduct);

module.exports = route;