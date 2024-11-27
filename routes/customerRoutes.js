const express= require('express');
const router= express.Router();

const {createCustomer,getCustomer}= require('../controllers/customerController');

router.post('/customers/create',createCustomer);router
router.get('/customer/get',getCustomer);

module.exports= router;