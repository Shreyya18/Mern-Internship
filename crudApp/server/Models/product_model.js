const mongoose = require('mongoose');
const productschema = new mongoose.Schema({
    product_name:{type:String},
    product_price:{type:Number},
    product_qty:{type:Number},
    product_description:{type:String},
})

module.exports = mongoose.model("Product", productschema)
// product_name,
// product_price,
// product_qty,
// product_description