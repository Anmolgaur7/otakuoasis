const express = require('express');
const router = express.Router();
const Order = require('../models/orders');

router.post('/new', async (req, res) => {
    const { Name, Email, Address,Userid, City, Country, PostalCode, PhoneNumber,OrderItem } = req.body;
    console.log({ Name, Email, Address, City, Country, PostalCode, PhoneNumber,OrderItem });
    try {
        const order = new Order({
            Name,
            Email,
            Address,
            Userid,
            City,
            Country,
            PostalCode,
            PhoneNumber,
            OrderItem
        });
        await order.save();
        res.json(order);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.get('/all', async (req, res) => {
    try {
        const orders = await Order.find();
        res.json(orders);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.get('/get/:id', async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        res.json(order);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.delete('/delete/:id', async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        if (!order) return res.status(404).send('No order found');
        await order.deleteOne(order) 
        res.status(200).send('Order deleted successfully');
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;