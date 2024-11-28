const express= require('express');
const routes= express.Router();
const {createOrders,getAllOrders,getOrderById}= require('../controllers/orderController');

routes.post('/orders/create',createOrders);
routes.get('/orders/get',getAllOrders);
routes.get('/orders/get/:id',getOrderById)
module.exports=routes;