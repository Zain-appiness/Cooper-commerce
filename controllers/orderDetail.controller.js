const orderDetailService = require('../service/orderDetailService');

async function createOrderDetail(req, res) {
  try {
    const orderDetailData = req.body;
    const orderDetail = await orderDetailService.createOrderDetail(orderDetailData);
    res.status(201).json(orderDetail);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create order detail', details: error.message });
  }
}

async function getOrderDetail(req, res) {
  try {
    const { orderNumber, productCode } = req.params;
    const orderDetail = await orderDetailService.getOrderDetail(orderNumber, productCode);
    if (!orderDetail) return res.status(404).json({ error: 'Order detail not found' });
    res.status(200).json(orderDetail);
  } catch (error) {
    res.status(400).json({ error: 'Failed to retrieve order detail', details: error.message });
  }
}

module.exports = { createOrderDetail, getOrderDetail };
