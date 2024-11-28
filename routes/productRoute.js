const express = require('express');
const router = express.Router();
const {createProduct,getProduct,getProductById} = require('../controllers/productController');

router.post('/product', createProduct);
router.get('/product/:productCode', getProduct);
router.get('/product/getone/:id',getProductById)

module.exports = router;
