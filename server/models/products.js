const mongoose = require('mongoose');

const productschema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Enter name of product"],
        trim: true
    },
    price: {
        type: String,
        required: [true, "Enter Price of product"],
        unique: true,
        trim: true
    },
    description: {
        type: String,
        required: [true, "Enter enterdesc"],
        trim: true
    },
    anime: {
        type: String,
        required: [true, "Enter name of Anime"],
        unique: true,
        trim: true
    },

    image: {
        type: String,
        required: [true, "Enter image of product"],
        trim: true
    },

    featured : {
        type: Boolean,
        default: false
    },
});


const Product = mongoose.model('Product', productschema);

module.exports = Product;