const customer = require('../models/customer');
const customerService= require('../service/customerService');
const employeeService= require('../service/employeeService');

async function createCustomer(req, res) {
  try {
    const { salesRepEmployeeNumber } = req.body;

    console.log(req.body);

    let employee = null;
    if (salesRepEmployeeNumber) {
      employee = await employeeService.getEmployeeByNumber(salesRepEmployeeNumber); // Fetch employee by number
    }

    if (!employee && salesRepEmployeeNumber) {
      // Default employee data if not provided
      const defaultEmployeeData = {
        employeeNumber: salesRepEmployeeNumber,
        lastName: "Unknown",  // Default value
        firstName: "Unknown", // Default value
        extension: "000",     // Default value
        email: "no-email@company.com",  // Default value
        officeCode: "1",     // Default value (assuming officeCode "1" exists)
        reportsTo: null,     // Default value (no manager assigned)
        jobTitle: "Sales Rep"  // Default value
      };

      // Create the employee using the default values
      employee = await employeeService.createEmployee(defaultEmployeeData);
    }

    // Now pass the customer data to the service to create the customer
    const customer = await customerService.createCustomer(req.body);  // Pass req.body here
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
        console.error('Error in getCustomer:', error.message); // Log the error for debugging
        res.status(500).json({
          error: 'FAILED TO GET CUSTOMER',
        });
    }
}
async function getCustomerByID(req, res) {
  try {
    const customerNumber = req.params.id;  // Get the 'id' from URL params
    const customer = await customerService.getCustomerByNumber(customerNumber);
    
    // If no customer found, return 404
    if (!customer) {
      return res.status(404).json({
        error: 'Customer not found',
      });
    }

    // Return the customer data with a 200 OK status
    res.status(200).json(customer);
  } catch (error) {
    console.error('Error in getCustomer:', error.message); // Log the error for debugging
    res.status(500).json({
      error: 'FAILED TO GET CUSTOMER',
    });
  }
}

module.exports = { createCustomer, getCustomer ,getCustomerByID};
