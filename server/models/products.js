const mongoose = require('mongoose');

const Productschema = mongoose.Schema({
    name: {
        type: String,
        required: true, 
    },
    Price: {
        type: String,
        required: true, 
    },
    description: {
        type: String,
        required: true
        
    },
    Anime: {
        type: String,
        required: true, 
            
    },
    image: {
        type: String,
        required: true, 
            
    },
    featured : {
        type: Boolean,
        default: false
    },
});

const Product = mongoose.model('Product', Productschema);

module.exports = Product;
