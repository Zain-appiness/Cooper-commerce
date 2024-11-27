const paymentService = require('../service/paymentService');

async function createPayment(req, res) {
  try {
    const paymentData = req.body;
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
