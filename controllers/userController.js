const User = require("../models/userModel")

exports.getAUser = async(req, res)=>{
    const {id} = req.user
    try {
        const getUser = await User.findById(id).select("-password -updatedAt")
        res.status(200).json(getUser)
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.getAllusers = async(req, res)=>{
    try {
        const allUsers = await User.find()
        res.status(400).json(allUsers)
    } catch (error) {
        console.log(error);
    }
}