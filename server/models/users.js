const mongoose = require('mongoose');

const userschema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Enter your name"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Enter your email"],
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: [true, "Enter your password"]
    },
    role: {
        type: String,
        default: 0
    }
}, {
    timestamps: true
});
module.exports=mongoose.model("users",userschema)