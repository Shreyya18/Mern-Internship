const producttable = require('../Models/product_model')

const addproduct = async(req,res)=>{
    try {
        const {product_name, product_price, product_qty, product_description}= req.body;

        const productdetails = new producttable({
            product_name, 
            product_price, 
            product_qty, 
            product_description
        })
        await productdetails.save();
        res.status(201).json({message:"Product added successfully", pdata:productdetails})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Server error", error})
    }
}

module.exports = {addproduct}