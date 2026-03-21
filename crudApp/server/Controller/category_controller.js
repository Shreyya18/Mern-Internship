const categorytable = require('../Models/category_model')

const addcategory = async(req,res)=>{
    try {
        const {category_name, category_description} = req.body;

        const categorydetails = new categorytable({
            category_name,
            category_description
        })

        await categorydetails.save();
        res.status(201).json({message:"Category added successfully", pcategory:categorydetails})

    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Server error", error})
    }
}

module.exports ={addcategory}