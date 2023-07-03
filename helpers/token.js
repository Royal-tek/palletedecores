const jwt = require("jsonwebtoken")

const genToken = (id)=>{
    const payload = {
        user: {
            id
        }
    }
    const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "3d"})
    return token
}

module.exports = {
    genToken
}