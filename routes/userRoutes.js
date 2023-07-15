const express = require('express')
const router = express.Router()
const userController = require("../controllers/userController")
const {isAuthenticated} = require("../middlewares/auth")


router.get('/get-a-user', isAuthenticated, userController.getAUser)
router.get('/get-all-users', userController.getAllusers)



module.exports = router