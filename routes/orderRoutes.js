const express= require('express');
const routes= express.Router();
const {createOrders,getAllOrders}= require('../controllers/orderController');

routes.post('/orders/create',createOrders);
routes.get('/orders/get',getAllOrders);
module.exports=routes;