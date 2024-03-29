const jwt = require("jsonwebtoken");

const verifyToken = (req,res,next) => {
    const authHeader = req.query;
    if(authHeader){
        const token = authHeader.token;
        jwt.verify(token,process.env.JWT_SEC,(err,user)=>{
            if (err) res.status(403).json("Token is not valid!");
            req.user = user;
            next();
        })
    }
    else{
        return res.status(401).json("You are not authenticated!");
    }
}

module.exports = verifyToken;