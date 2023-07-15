const User = require("../models/userModel")
const { encrypt, compare }= require("../helpers/auth")
const { genToken } = require("../helpers/token")

exports.registerUser = async(req, res)=>{
    const {password, email} = req.body
    try {
        const checkEmail = await User.findOne({email})
        if(checkEmail) return res.status(401).json({error: "Email already in use"})

        req.body.password = await encrypt(password)
        const register = new User({
            ...req.body
        
        })
        await register.save()
        res.status(200).json(register)

    } catch (error) {
        res.status(400).json(error)
        console.log(error);
    }
}

exports.loginUser = async(req, res)=>{
    const { email, password} = req.body
    try {
        const checkEmail = await User.findOne({email})
        if(!checkEmail) return res.status(400).json({error:"Email or Password Incorrect"})
        
        const checkPwd = await compare(password, checkEmail.password)
        if(!checkPwd) return res.status(400).json({error: "Username or Password Incorrect"})

        const token = await genToken(checkEmail._id, checkEmail.isAdmin)
        res.status(200).json({token, message:"Login Success"})


    } catch (error) {
        console.log(error);
    }

}
