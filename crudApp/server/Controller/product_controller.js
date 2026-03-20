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

const getproduct =async(req,res)=>{
    try {
        const getallproducts= await producttable.find();
        console.log(getallproducts);
        res.status(200).json({message:"Products fetched", allproducts:getallproducts})
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Server error", error});
    }
}

const getproductbyid = async(req, res)=>{
    try {
        const pid= req.params.id;
        const productbyid = await producttable.findById(pid);
        console.log(productbyid);
        res.status(200).json({message:"Product found", byid:productbyid})
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Server error", error});
    }
}


module.exports = {addproduct, getproduct, getproductbyid}