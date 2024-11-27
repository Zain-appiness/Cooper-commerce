const { Payment } = require('../models');

async function createPayment(paymentData) {
  try {
    const payment = await Payment.create(paymentData);
    return payment;
  } catch (error) {
    throw new Error('Error creating payment: ' + error.message);
  }
}

async function getPayment(customerNumber, checkNumber) {
  try {
    const payment = await Payment.findOne({
      where: { customerNumber, checkNumber },
      include: ['customer']
    });
    return payment;
  } catch (error) {
    throw new Error('Error fetching payment: ' + error.message);
  }
}

module.exports = { createPayment, getPayment };
