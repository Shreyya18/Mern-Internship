const mongoose = require('mongoose');
const CONNECTION_URL= 'mongodb://localhost:27017/mern';
//  'mongodb://localhost:27017' = connection link
// 'mern' = database name

const dbConnection =async ()=>{
    try {
        await mongoose.connect(CONNECTION_URL);
        console.log("database connected sucessfully...")
    } catch (error) {
        console.log(error)
    }
}

module.exports=dbConnection;