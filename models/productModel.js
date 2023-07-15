const mongoose = require("mongoose")
const Schema = mongoose.Schema


const productSchema = new Schema({
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    name: {
        type: String,
        required: true,
        lowercase: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
    }

}, {
    timestamps: true
})

module.exports = mongoose.model('Product', productSchema)