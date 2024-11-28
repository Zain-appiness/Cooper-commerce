const { Product } = require('../models');
const productLineService= require('./prouctLineService');

async function createProduct(productData) {
  try {
    const productLine= productData.productLine;
    let productlineDetail= null;
    if(productLine){
      productlineDetail= await productLineService.getProductLine(productLine);
    }

    if(!productlineDetail && productLine){
      const defaultProductLineData = {
        productLine: productLine, 
        textDescription: "This is a default product line description.", 
        htmlDescription: "<p>This is a default HTML description for the product line.</p>",
        image: null, 
      };

      const productlineDetail= await productLineService.createProductLine(defaultProductLineData);
      console.log(productlineDetail)

    }
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

async function getProductById(productId) {
try {
  const product= await Product.findOne({
    where:{productCode: productId}
  })
  return product;
} catch (error) {
  throw new Error('Error fetching product:'+error.message);
}
}

module.exports = { createProduct, getProduct,getProductById };
