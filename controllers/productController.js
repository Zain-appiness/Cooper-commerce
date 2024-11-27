const productService = require('../service/productService');

async function createProduct(req, res) {
  try {
    const productData = req.body;
    const product = await productService.createProduct(productData);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create product', details: error.message });
  }
}

async function getProduct(req, res) {
  try {
    const { productCode } = req.params;
    const product = await productService.getProduct(productCode);
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error: 'Failed to retrieve product', details: error.message });
  }
}

module.exports = { createProduct, getProduct };
