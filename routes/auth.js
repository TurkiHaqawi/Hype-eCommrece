const router = require("express").Router()
const User = require("../models/User")
const CryptoJS = require("crypto-js")
const jwt = require("jsonwebtoken")

// REGISTER
router.post("/register", async (req, res) => {
    
    const hashPassword = CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SECRET).toString()

    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashPassword
    })

    try {
        const savedUser = await newUser.save()
        res.status(200).json(savedUser)
    } catch (err) {
        res.status(500).json(err)
    }
})


// LOGIN
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({username: req.body.username})
        !user && res.status(401).json("Wrong Credentials...!")

        const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SECRET)
        const OraginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8)

        OraginalPassword !== req.body.password && 
        res.status(401).json("Wrong Credentials...!")

        const accessToken = jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin,
        }, process.env.JWT_SECRET, {expiresIn: "2d"})

        const {password, ...others} = user._doc

        res.status(200).json({...others, accessToken})
    } catch (err) {
        res.status(404).json(err)
    }
})

module.exports = router;