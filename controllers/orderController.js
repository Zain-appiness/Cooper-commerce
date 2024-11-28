const { Order } = require('../models');
const orderService = require('../service/orderService');
const customerService = require('../service/customerService');

async function createOrders(req, res) {
    try {
        const orderData= req.body;
        const { customerNumber } = req.body;
        console.log(req.body);

        let customer = null;

        if (customerNumber) {
            customer = await customerService.getCustomerByNumber(customerNumber);
        }
        if (!customer && customerNumber) {
            const defaultCustomerData = {
                customerNumber,
                customerName: "Default Customer",
                contactLastName: "Unknown",
                contactFirstName: "Unknown",
                phone: "000-000-0000",
                addressLine1: "Default Address Line 1",
                city: "Default City",
                country: "Default Country",
                creditLimit: 0.0,
            };

            customer = await customerService.createCustomer(defaultCustomerData);
        }

        const order = await orderService.createOrder(orderData);
        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ error: error.message || 'Failed to create order' });
    }
}

async function getAllOrders(req, res) {
    try {
        const orders = await orderService.getAllOrders();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ error: error.message || 'Failed to get orders' });
    }
}

async function getOrderById(req, res) {
    try {
        const orderDetail = await orderService.getOrderById(req.params.id);
        res.status(200).json(orderDetail);
    } catch (error) {
        res.status(500).json({ error: error.message || 'Failed to get order' });
    }
}

module.exports = { createOrders, getAllOrders, getOrderById };
