const employeeService= require('../service/employeeService');
const officeService= require('../service/officeService')

async function createEmployee(req,res) {
    try {
        const { officeCoded } = req.body;

        console.log(req.body);

        let office = null;
        if (officeCoded) {
          office = await officeService.getOfficeByNumber(officeCoded); // Fetch employee by number
        }

        if (!office && officeCoded) {
            const defaultOfficeData = {
              officeCode: officeCoded,
              city: "Unknown",  
              addressLine1: "Unknown", 
              addressLine2: "Unknown"
            };
          
          
            office = await officeService.createOffice(defaultOfficeData);
          }

        const employee= await employeeService.createEmployee(req.body);
        res.status(201).json(employee)
    
    }  catch (error) {
        console.error('Error creating customer:', error.message);
        res.status(400).json({
          error: 'FAILED TO CREATE CUSTOMER',
          details: error.errors || error.message,
        });
      }
    }

async function getEmployee(req,res) {
    try {
        const employees=await employeeService.getAllEmployees();
        console.log(employees);
        res.status(201).json(employees);
    } catch (error) {
        console.error('Error in getCustomer:', error.message); 
        res.status(500).json({
          error: 'FAILED TO GET CUSTOMER',
        });
    }
}

module.exports = { createEmployee, getEmployee };
