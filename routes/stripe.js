const { verifyToken } = require("./verify")
const router = require("express").Router()
const stripe = require("stripe")(process.env.STRIPE_KEY)


router.post("/payment", verifyToken, (req, res) => {
    stripe.charges.create({
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: "usd"
    }, (srtipeErr, stripeRes) => {
        if(srtipeErr) res.status(500).json(srtipeErr)
        else {
            res.status(200).json(stripeRes)
        }
    })
})


module.exports = router;