// Setup Requirments
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require('cors')
const PORT = process.env.PORT || 5000
const path = require("path")
app.use(express.json())
app.use(cors())
app.use(express.static("clint/build"));
require("dotenv").config()
// Imports Routes
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")
const productRoute = require("./routes/product")
const cartRoute = require("./routes/cart")
const orderRoute = require("./routes/order")
const stripeRout = require("./routes/stripe")


// MongoDB Connection
mongoose.connect(process.env.DB_URL).then(() => console.log("DB Connected")).catch((err) => console.log("DB Error"))


// Routes
app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/products", productRoute)
app.use("/api/cart", cartRoute)
app.use("/api/orders", orderRoute)
app.use("/api/checkout", stripeRout)

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "clint/build/index.html"));
});

app.listen(PORT, () => console.log(`Server up to running with Port: ${PORT}`))