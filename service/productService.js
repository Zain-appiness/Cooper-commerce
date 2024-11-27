const { Product } = require('../models');

async function createProduct(productData) {
  try {
    const product = await Product.create(productData);
    return product;
  } catch (error) {
    throw new Error('Error creating product: ' + error.message);
  }
}

async function getProduct(productCode) {
  try {
    const product = await Product.findOne({
      where: { productCode },
      include: ['productLineDetails', 'orderDetails']
    });
    return product;
  } catch (error) {
    throw new Error('Error fetching product: ' + error.message);
  }
}

module.exports = { createProduct, getProduct };
