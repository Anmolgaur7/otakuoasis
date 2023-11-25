const moongose = require('mongoose');

const Orderschema = moongose.Schema({
    Name: {
        type: String,
        required: true, 
    },
    Email: {
        type: String,
        required: true, 
    },
    Address: {
        type: String,
        required: true
        
    },
    City: {
        type: String,
        required: true, 
            
    },
    Country: {
        type: String,
        required: true, 
            
    },
    PostalCode : {
        type: String,
        required: true, 
    },
    PhoneNumber : {
        type: String,
        required: true, 
    },
    OrderItem: {
        type: Array,
        required: true, 
    },
});

const Order = moongose.model('Order', Orderschema);

module.exports = Order;