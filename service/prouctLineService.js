const { ProductLine } = require('../models');

async function createProductLine(productLineData) {
  try {
    const productLine = await ProductLine.create(productLineData);
    return productLine;
  } catch (error) {
    throw new Error('Error creating product line: ' + error.message);
  }
}

async function getProductLine(productLineCode) {
  try {
    const productLine = await ProductLine.findOne({
      where: { productLine: productLineCode },
      include: ['products']
    });
    return productLine;
  } catch (error) {
    throw new Error('Error fetching product line: ' + error.message);
  }
}



module.exports = { createProductLine, getProductLine};
