const { or } = require('sequelize');
const {Order}= require('../models');

async function createOrder(orderData) {
    try {
        const order= Order.create(orderData);
        return(order);
    } catch (error) {
        throw new Error('ERROR CREATING ORDER');
    }
}

async function getAllOrders() {
    try {
        const orders= await Order.findAll({
            include:{
                model: Order.associations.customer.target,
                as:'customer',
            },
        })
        return orders;
    } catch (error) {
        throw new Error("ERROR FETCHING ORDERS");
    }
    
}
module.exports = { createOrder, getAllOrders };