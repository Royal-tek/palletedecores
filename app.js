const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const port = process.env.PORT
const dbConnect = require('./config/db')
const cors = require('cors')

const authRoutes = require("./routes/authRoutes")
const userRoutes = require("./routes/userRoutes")
const productRoutes = require("./routes/productRoutes")
const categoryRoutes = require("./routes/categoryRoutes")

app.use(cors('*'))



app.use(express.json({ extended: false}))
app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/products", productRoutes)
app.use("/api/category", categoryRoutes)



app.get("/", (req, res)=>{
    res.json("Welcome to PalleteDecore")
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})
dbConnect()
