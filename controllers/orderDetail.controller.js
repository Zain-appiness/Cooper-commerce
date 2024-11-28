const { or } = require('sequelize');
const orderDetailService = require('../service/orderDetailService');
const orderService= require('../service/orderService');
const productService= require('../service/productService');

async function createOrderDetail(req, res) {
  try {
    const orderDetailData = req.body;
    const {orderNumber} =req.body;
     
    const orderData=null;
    if(orderNumber){
      const orderData= await orderService.getOrderById(orderNumber);
      console.log(orderData)
    }
    
    if(!orderData && orderNumber){
      const defaultOrderData = {
        orderNumber:orderNumber, // Generate a random order number
        orderDate: new Date(), // Current date
        requiredDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
        shippedDate: null, // Not shipped yet
        status: "Pending", // Default status
        comments: null, // No comments
        customerNumber: Math.floor(Math.random() * 900) + 100, // Assuming a default customer with customerNumber = 1 exists
      };
     const orderData= await orderService.createOrder(defaultOrderData); 
     console.log(orderData);     
    }

    const {productCode}= req.body;
    const productData=null;
    if(productCode){
      const productData= await productService.getProductById(productCode);
    }

    if(!productData && productCode){
      const defaultProductData = {
        productCode: productCode, // Default product code
        productName: "Default Product", // Default product name
        productLine: "Default Product Line", // Default product line (ensure it exists in ProductLine table)
        productScale: "1:10", // Default scale
        productVendor: "Default Vendor", // Default vendor
        productDescription: "This is a default product description.", // Default description
        quantityInStock: 0, // Default stock quantity
        buyPrice: 0.0, // Default buy price
        MSRP: 0.0, // Default MSRP
      };
       const productCreate= await productService.createProduct(defaultProductData);
       console.log(productCreate);
    }


    const orderDetail = await orderDetailService.createOrderDetail(orderDetailData);
    res.status(201).json(orderDetail);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create order detail', details: error.message });
  }
}

async function getOrderDetail(req, res) {
  try {
    const { orderNumber, productCode } = req.params;
    const orderDetail = await orderDetailService.getOrderDetail(orderNumber, productCode);
    if (!orderDetail) return res.status(404).json({ error: 'Order detail not found' });
    res.status(200).json(orderDetail);
  } catch (error) {
    res.status(400).json({ error: 'Failed to retrieve order detail', details: error.message });
  }
}

module.exports = { createOrderDetail, getOrderDetail };
