const express = require('express');
const router = express.Router();
const {createProductLine,getProductLine} = require('../controllers/productLineController');

router.post('/product-line', createProductLine);
router.get('/product-line/:productLineCode', getProductLine);

module.exports = router;

