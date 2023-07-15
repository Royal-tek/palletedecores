const express = require('express')
const router = express.Router()
const productController = require("../controllers/productController")
const { isAuthenticated, isAdmin } = require("../middlewares/auth")

router.post('/add-product', isAuthenticated, isAdmin, productController.createProduct)


module.exports = router