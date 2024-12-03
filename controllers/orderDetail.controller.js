const { or } = require('sequelize');
const orderDetailService = require('../service/orderDetailService');
const orderService= require('../service/orderService');
const productService= require('../service/productService');

async function createOrderDetail(req, res) {
  try {
    const orderDetailData = req.body;
    const {orderNumber} =req.body;
     
    let orderData=null;
    if(orderNumber){
      orderData= await orderService.getOrderById(orderNumber);
      console.log(orderData)
    }
    
    if(!orderData && orderNumber){
      const defaultOrderData = {
        orderNumber:orderNumber, 
        orderDate: new Date(), 
        requiredDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), 
        shippedDate: null, 
        status: "Pending", 
        comments: null, 
        customerNumber: Math.floor(Math.random() * 900) + 100, 
      };
     const orderData= await orderService.createOrder(defaultOrderData); 
     console.log(orderData);     
    }

    const {productCode}= req.body;

    let productData=null;
    if(productCode){
      productData= await productService.getProductById(productCode);
    }

    if(!productData && productCode){
      const defaultProductData = {
        productCode: productCode, 
        productName: "Default Product", 
        productLine: "Default Product Line",
        productScale: "1:10", 
        productVendor: "Default Vendor", 
        productDescription: "This is a default product description.", 
        quantityInStock: 0, 
        buyPrice: 0.0, 
        MSRP: 0.0, 
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
