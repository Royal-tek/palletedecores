const jwt= require("jsonwebtoken")

exports.isAuthenticated = (req, res, next)=>{
    let token;
    if(req.headers["authorization"] && req.headers["authorization"].split(" ")[0] =="Bearer"){
        token = req.headers["authorization"].split(" ")[1]
    }
    else{
        res.status(400).json("No token present")
    }
    try {
        if(!token){
            return res.status(400).json("You are not authenticated")
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        // console.log(decoded);

        req.user = decoded.user
        next()

    } catch (error) {
        res.status(500).json(error)
    }
}

exports.isAdmin = (req, res, next)=>{
    try {
        const {isAdmin} = req.user
        if(isAdmin !== true){
            return res.status(400).json({error: "Only admins are allowed to perform such task."})
        }
        next()
    } catch (error) {
        res.status(500).json(error)
    }
}