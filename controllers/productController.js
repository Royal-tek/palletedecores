const Product = require("../models/productModel")
const Category = require("../models/categoryModel")
const User = require("../models/userModel")

exports.createProduct = async(req, res)=>{
    const {name, category} = req.body
    try {
        const user = req.user
        const checkPoster = await User.findById(user.id)
        if(checkPoster.isAdmin === false){
            return res.status(401).json({error: "Only Admins can post products"})
        }
        const checkName = await Product.findOne({name})
        if(checkName) return res.status(400).json({error: "Product with that name already exists"})
        const checkCategory = await Category.findOne({_id:category})
        if(!checkCategory) return res.status(400).json({error: "Invalid Category"})

        const newProduct = new Product({
            name: name,
            category: category,
            ...req.body
        })
        await newProduct.save()
        res.status(200).json({ newProduct, message: "Product created successfully" });

    } catch (error) {
        res.status(500).json(error)
        console.log(error);
    }
}