const express = require('express');
const router = express.Router();
const {createOrderDetail,getOrderDetail} = require('../controllers/orderDetail.controller');

router.post('/order-detail', createOrderDetail);
router.get('/order-detail/:orderNumber/:productCode', getOrderDetail);

module.exports = router;
