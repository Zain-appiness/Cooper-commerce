const {Order}= require('../models')
const orderService = require('../service/orderService');

async function createOrders(req,res) {

    try {
        const order= await orderService.createOrder(req);
        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create order' });
    }
    
}

async function getAllOrders(req,res) {
    try {
        const orders = await orderService.getAllOrders();
        res.status(201).json(orders);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get order' });
    }
}

module.exports = { createOrders, getAllOrders };