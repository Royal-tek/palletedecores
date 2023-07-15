const jwt = require("jsonwebtoken")

const genToken = (id, isAdmin)=>{
    const payload = {
        user: {
            id,
            isAdmin
        }
    }
    const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "3d"})
    return token
}

module.exports = {
    genToken
}