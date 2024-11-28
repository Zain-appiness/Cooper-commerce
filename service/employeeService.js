const { Employee } = require('../models'); // Import your Employee model
const officeService= require('../service/officeService')


async function getEmployeeByNumber(employeeNumber) {
  try {
    const employee = await Employee.findOne({
      where: { employeenumber: employeeNumber },
    });
    return employee;
  } catch (error) {
    throw new Error('Error finding employee: ' + error.message);
  }
}


async function createEmployee(employeeData) {
  try {
    
    const officeCoded  = employeeData.officeCode;

    console.log(employeeData);

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

    const employee = await Employee.create(employeeData);
    return employee;
  } catch (error) {
    throw new Error('Error creating employee: ' + error.message);
  }
}

async function getAllEmployees() {
    try {
      const employees = await Employee.findAll();
      return employees;
    } catch (error) {
      throw new Error('Error fetching all employees: ' + error.message);
    }
  }

module.exports = { getEmployeeByNumber, createEmployee, getAllEmployees };
