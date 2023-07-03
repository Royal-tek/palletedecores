const bcrypt = require("bcrypt")

const encrypt = async(value)=>{
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(value, salt)
}

const compare = async(newData, hashedData)=>{
    return bcrypt.compare(newData, hashedData)
}

module.exports = {
    encrypt,compare
}