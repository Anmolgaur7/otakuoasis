const express = require('express');
const router = express.Router();
const Order = require('../models/orders');

router.post('/new', async (req, res) => {
    const { Name, Email, Address, City, Country, PostalCode, PhoneNumber } = req.body;
    try {
        let order = new Order({
            Name,
            Email,
            Address,
            City,
            Country,
            PostalCode,
            PhoneNumber
        });
        await order.save();
        res.json(order);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});