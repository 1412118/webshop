const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    fullName:{
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('users', UserSchema); //(Collection name, Schema name)