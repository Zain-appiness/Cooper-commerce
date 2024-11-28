const productService = require('../service/productService');
const productLineService = require('../service/prouctLineService');

async function createProduct(req, res) {
  try {
    const productData= req.body;
    const {productLine} = req.body;
     console.log(req.body);

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


async function getProductById(req,res) {
  
  try {
    const productCode= req.params.id;
    const productData= await productService.getProductById(productCode);
    res.status(200).json({
      message:"Product get by Id",
      productData,
    })
  } catch (error) {
    res.status(400).json({ error: 'Failed to retrieve product', details: error.message });
  }
}
module.exports = { createProduct, getProduct,getProductById };
