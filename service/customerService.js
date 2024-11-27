const {Customer,Order}= require('../models')

async function createCustomer(customerData) {
    try {
        const customer= await Customer.create(customerData);
        return customer
    } catch (error) {
        console.error('Error createing customers:', error.message);
        throw new Error('Error creating customers');
    }
}

async function getAllCustomer() {

    try {
        const customers= await Customer.findAll({
            include:{
                model: Customer.associations.orders.target,
                as:'orders',
            }
        });
        return customers;
    } catch (error) {
        console.error('Error fetching customers:', error.message);
        throw new Error('Error fetching customers');
    }
    
}

module.exports = { createCustomer, getAllCustomer };