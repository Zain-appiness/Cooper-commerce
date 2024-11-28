const express= require('express');
const router= express.Router();

const {createCustomer,getCustomer,getCustomerByID}= require('../controllers/customerController');

router.post('/customers/create',createCustomer);router
router.get('/customer/get',getCustomer);
router.get('/customer/get/:id', getCustomerByID);

module.exports= router;