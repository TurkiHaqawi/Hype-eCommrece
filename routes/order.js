const router = require("express").Router()
const Order = require("../models/Order")
const { verifyAuthorization, verifyAdmin, verifyToken } = require("./verify");

// // Create
router.post("/", verifyToken, async (req, res) => {
    const newOrder = new Order(req.body)
    try {
        const savedOrder = await newOrder.save()
        res.status(200).json(savedOrder)
    } catch (err) {
        res.status(500).json(err)
    }
})


// // Update
router.put("/:id", verifyAdmin, async (req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
        res.status(200).json(updatedOrder)
    } catch (err) {
        res.status(500).json(err)
    }
})


// // Delete
router.delete("/:id", verifyAdmin, async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.id)
        res.status(200).json("Order has been deleted Succesfuly!")
    } catch (err) {
        res.status(500).json(err)
    }
})


// Get User Order
router.get("/find/:id", verifyAuthorization, async (req, res) => {
    try {
        const orders = await Order.find({userId: req.params.id})
        res.status(200).json(orders)
    } catch (err) {
        res.status(500).json(err)
    }
})



// Get All Orders (Just Admit can reach all orders)
router.get("/", verifyAdmin, async (req, res) => {
    try {
        const allOrders = await Order.find()
        res.status(200).json(allOrders)
    } catch (err) {
        res.status(500).json(err)
    }
})



module.exports = router;