const express = require('express')
const router = express.Router()
const categoryController = require("../controllers/categoryController")
const { isAuthenticated, isAdmin } = require("../middlewares/auth")


router.post('/add-category', isAuthenticated, isAdmin, categoryController.createCategory)
router.get('/all-categories',  categoryController.getCategories)
router.delete('/delete-category/:catId',  isAuthenticated, isAdmin,  categoryController.deleteCategory)
router.put('/edit-category/:catId',  isAuthenticated, isAdmin,  categoryController.editCategory)




module.exports = router