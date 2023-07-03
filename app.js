const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const port = process.env.PORT
const dbConnect = require('./config/db')
const cors = require('cors')

const userRoutes = require("./routes/userRoutes")

app.use(express.json({ extended: false}))
app.use("/api/users", userRoutes)


app.use(cors())
app.get("/", (req, res)=>{
    res.json("Welcome to PalleteDecore")
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})
dbConnect()
