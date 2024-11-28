const { or } = require('sequelize');
const {Order}= require('../models');
const customerService= require('../service/customerService');

async function createOrder(orderData) {
    try {
        const customerNumber= orderData.customerNumber;
        console.log(customerNumber);

        let customer=null;
        if(customerNumber){
            customer= await customerService.getCustomerByNumber(customerNumber)
        }

        if(!customer && customerNumber){

            const defaultCustomerData = {
                customerNumber: customerNumber, // A unique number, ensure it is managed properly to avoid conflicts
                customerName: "Default Customer",
                contactLastName: "Unknown",
                contactFirstName: "Unknown",
                phone: "000-000-0000",
                addressLine1: "Default Address Line 1",
                addressLine2: null, // Optional
                city: "Default City",
                state: null, // Optional
                postalCode: null, // Optional
                country: "Default Country",
                salesRepEmployeeNumber: null, // Assuming no sales representative is assigned
                creditLimit: 0.0, // Default credit limit
              };

              customer= await customerService.createCustomer(defaultCustomerData);

        }
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
async function getOrderById(orderId) {
    try {
        const orderDetail= await Order.findOne({
            where:{orderNumber: orderId},
        });
        return orderDetail;
    } catch (error) {
        throw new Error("ERROR FETCHING ORDER BY ID ");
    }
    
}
module.exports = { createOrder, getAllOrders ,getOrderById};