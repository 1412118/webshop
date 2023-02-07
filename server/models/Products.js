const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    sku: {
        type: String,
        require: true,
        unique: true
    },
    name: {
        type: String,
        require: true,
        unique: true
    },
    image: {
        type: String,
        require: true
    },
    description:{
        type: String
    },
    color:{
        type: String
    },
    size: {
        type: Number
    },
    price: {
        type: Number
    },
    quantity: {
        type: Number
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('users', UserSchema); //(Collection name, Schema name)