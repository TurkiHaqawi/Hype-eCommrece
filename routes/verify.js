const jwt = require("jsonwebtoken")


const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token
    if(authHeader) {
        const token = authHeader.split(" ")[1]
        jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
            if(err) res.status(403).json("Token is not Valid")
            req.user = data;
            next();
        })
    } else {
        res.status(401).json("You are not authentication")
    }
}

const verifyAuthorization = (req, res, next) => {
    verifyToken(req, res, () => {
        if(req.user.id === req.params.id || req.user.isAdmin) {
            next()
        } else {
            res.status(403).json("You are not allowed to do that")
        }
    })
} 

const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if(req.user.isAdmin) {
            next()
        } else {
            res.status(403).json("You are not allowed to do that")
        }
    })
}

module.exports = {verifyToken, verifyAuthorization, verifyAdmin}