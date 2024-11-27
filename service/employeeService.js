const { Employee } = require('../models'); // Import your Employee model
const officeService= require('../service/officeService')

// Function to get an employee by employee number
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

// Function to create a new employee
async function createEmployee(employeeData) {
  try {
    
    const officeCoded  = employeeData.officeCode;

    console.log(employeeData);

    let office = null;
    if (officeCoded) {
      office = await officeService.getOfficeByNumber(officeCoded); // Fetch employee by number
    }

    if (!office && officeCoded) {
        // Default employee data if not provided
        const defaultOfficeData = {
          officeCode: officeCoded,
          city: "Unknown",  // Default value
          addressLine1: "Unknown", // Default value
          addressLine2: "Unknown"
        };
      
        // Create the employee using the default values
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
