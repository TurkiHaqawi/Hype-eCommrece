const mongoose = require("mongoose")


const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Product Title is required"],
        unique: true
    },
    desc: {
        type: String,
        required: [true, "Product Description is required"]
    },
    img: {
        type: String,
        required: [true, "Product Image is required"]
    },
    categories: {
        type: Array
    },
    size: {
        type: Array
    },
    color: {
        type: Array
    },
    price: {
        type: Number,
        required: [true, "Product Price is required"]
    },
    inStock: {
        type: Boolean,
        default: true
    }
}, {timestamps: true})


module.exports = mongoose.model("Product", ProductSchema)