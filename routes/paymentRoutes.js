const express = require('express');
const router = express.Router();
const {createPayment,getPayment} = require('../controllers/paymentController');

router.post('/payment',createPayment);
router.get('/payment/:customerNumber/:checkNumber',getPayment);

module.exports = router;
