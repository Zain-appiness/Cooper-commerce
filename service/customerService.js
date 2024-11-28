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

async function getCustomerByNumber(customerNumber) {
    try {
      const customer = await Customer.findOne({
        where: { customernumber: customerNumber },
      });
  
      // If customer is not found, return null or undefined
      if (!customer) {
        return null;
      }
  
      return customer;
    } catch (error) {
      throw new Error('Error finding customer: ' + error.message);
    }
  }
  

module.exports = { createCustomer, getAllCustomer,getCustomerByNumber };