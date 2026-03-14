const usertable = require("../Models/User_model")

const registeruser = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;
    const userdetails = new usertable({
      name,
      email,
      password,
      phone,
      address,
    })
    await userdetails.save();
    res.status(201).json({ message: "user added successfully", udata: userdetails })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Server error", error })
  }
}

const getuser = async (req, res) => {
  try {
    const getallusers = await usertable.find();
    console.log(getallusers)
    res.status(200).json({ message: "user fetched", allusers: getallusers })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "server error", error })
  }
}

const getuserbyid = async (req, res) => {
  try {
    const uid = req.params.id
    const userbyid = await usertable.findById(uid)
    console.log(userbyid)
    res.status(200).json({ message: "user found", byid: userbyid })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Server error", error })
  }
}

const deleteuser = async (req, res) => {
  try {
      const d_id= req.params.id;
      const deleteuser=await usertable.findByIdAndDelete(d_id)
      console.log(deleteuser)
      res.status(200).json({message:"user deleted", d_user:deleteuser})
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Server error", error })
  }

}

const updateuser = async(req,res)=>{
try {
  // const uid=req.params.id;
  const {id} = req.params
  const body = req.body
  const updateuser = await usertable.findByIdAndUpdate(id, body, {new:true})
  console.log(updateuser)
  res.status(201).json({message:"user updated", updatedata:updateuser})

} catch (error) {
    console.log(error)
    res.status(500).json({message:"Server errror", error})
}
}
// module.exports= registeruser
// module.exports= getuser
// or
module.exports = { registeruser, getuser, getuserbyid, deleteuser, updateuser }