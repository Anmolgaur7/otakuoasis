const express = require('express');
const router = express.Router();


const stripe = require('stripe')('sk_test_51O7ctDSHY56XZU6lyeGCzH4c2L6T87h56NfyfbsycORbEPbGw6eowxl2ZBnmCdAm3axtugHkrGMGcA0xdG69YX7x00Lta7BGJ2')

router.post('/create-payment-intent',async (req, res) => {
    const calcuteOrderAmount = (items) => {
        // andkjasndknsakdn
        return 1400;
    }
    const { items } = req.body;
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calcuteOrderAmount(items),
      currency: "INR",
      automatic_payment_methods: {
        enabled: true,
      },
    });
    res.send({
      clientSecret: paymentIntent.client_secret
    });
  });

module.exports = router;
