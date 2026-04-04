const mongoose= require('mongoose');
const userschema=new mongoose.Schema({
    name:{type:String},
    email:{type:String, unique:true},
    password:{type:String},
    phone:{type:String},
    address:{type:String},
})
module.exports=mongoose.model("User", userschema)

// User->table name (collection name in mongodb)
