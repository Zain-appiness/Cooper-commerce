const express = require('express');
const router = express.Router();
const {createOrderDetail,getOrderDetail} = require('../controllers/orderController');

router.post('/order-detail', createOrderDetail);
router.get('/order-detail/:orderNumber/:productCode', getOrderDetail);

module.exports = router;
