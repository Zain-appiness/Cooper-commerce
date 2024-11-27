const { OrderDetail } = require('../models');

async function createOrderDetail(orderDetailData) {
  try {
    const orderDetail = await OrderDetail.create(orderDetailData);
    return orderDetail;
  } catch (error) {
    throw new Error('Error creating order detail: ' + error.message);
  }
}

async function getOrderDetail(orderNumber, productCode) {
  try {
    const orderDetail = await OrderDetail.findOne({
      where: { orderNumber, productCode },
      include: ['order', 'product']
    });
    return orderDetail;
  } catch (error) {
    throw new Error('Error fetching order detail: ' + error.message);
  }
}

module.exports = { createOrderDetail, getOrderDetail };
