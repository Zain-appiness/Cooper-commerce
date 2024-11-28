const customer = require('../models/customer');
const customerService= require('../service/customerService');
const employeeService= require('../service/employeeService');

async function createCustomer(req, res) {
  try {
    const { salesRepEmployeeNumber } = req.body;

    console.log(req.body);

    let employee = null;
    if (salesRepEmployeeNumber) {
      employee = await employeeService.getEmployeeByNumber(salesRepEmployeeNumber); 
    }

    if (!employee && salesRepEmployeeNumber) {
      // Default employee data if not provided
      const defaultEmployeeData = {
        employeeNumber: salesRepEmployeeNumber,
        lastName: "Unknown",  
        firstName: "Unknown",
        extension: "000",    
        email: "no-email@company.com", 
        officeCode: "1",     
        reportsTo: null,     
        jobTitle: "Sales Rep" 
      };

      
      employee = await employeeService.createEmployee(defaultEmployeeData);
    }

   
    const customer = await customerService.createCustomer(req.body); 
    res.status(201).json(customer);

  } catch (error) {
    console.error('Error creating customer:', error.message);
    res.status(400).json({
      error: 'FAILED TO CREATE CUSTOMER',
      details: error.errors || error.message,
    });
  }
}

async function getCustomer(req,res) {
    try {
        const customers=await customerService.getAllCustomer();
        console.log(customers);
        res.status(201).json(customers);
    } catch (error) {
        console.error('Error in getCustomer:', error.message); 
        res.status(500).json({
          error: 'FAILED TO GET CUSTOMER',
        });
    }
}
async function getCustomerByID(req, res) {
  try {
    const customerNumber = req.params.id; 
    const customer = await customerService.getCustomerByNumber(customerNumber);
    
    
    if (!customer) {
      return res.status(404).json({
        error: 'Customer not found',
      });
    }

    
    res.status(200).json(customer);
  } catch (error) {
    console.error('Error in getCustomer:', error.message);
    res.status(500).json({
      error: 'FAILED TO GET CUSTOMER',
    });
  }
}

module.exports = { createCustomer, getCustomer ,getCustomerByID};
