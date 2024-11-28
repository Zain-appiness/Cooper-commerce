const paymentService = require('../service/paymentService');
const custmoreService= require('../service/customerService');

async function createPayment(req, res) {
  try {
    const paymentData = req.body;
    
    const {customerNumber} =req.body;
    console.log(req.body);

    let custmore=null;

    if(customerNumber){
         custmore= await custmoreService.getCustomerByNumber(customerNumber)
    }
    if(!customerNumber && custmore){
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

         custmore= await custmoreService.createCustomer(defaultCustomerData);
    }
    const payment = await paymentService.createPayment(paymentData);
    res.status(201).json(payment);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create payment', details: error.message });
  }
}

async function getPayment(req, res) {
  try {
    const { customerNumber, checkNumber } = req.params;
    const payment = await paymentService.getPayment(customerNumber, checkNumber);
    if (!payment) return res.status(404).json({ error: 'Payment not found' });
    res.status(200).json(payment);
  } catch (error) {
    res.status(400).json({ error: 'Failed to retrieve payment', details: error.message });
  }
}

module.exports = { createPayment, getPayment };
