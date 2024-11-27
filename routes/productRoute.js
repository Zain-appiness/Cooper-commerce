const express = require('express');
const router = express.Router();
const {createProduct,getProduct} = require('../controllers/productController');

router.post('/product', createProduct);
router.get('/product/:productCode', getProduct);

module.exports = router;
