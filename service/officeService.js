const { Office } = require('../models'); // Import your Office model

// Function to get an office by office number
async function getOfficeByNumber(officeCode) {
  try {
    const office = await Office.findOne({
      where: { officeCode: officeCode }, // Correct query to fetch office by officeCode
    });
    return office;
  } catch (error) {
    throw new Error('Error finding office: ' + error.message);
  }
}

// Function to create a new office
async function createOffice(officeData) {  // Use officeData, not just officeCode
  try {
    console.log(officeData);
    const office = await Office.create(officeData); 
    console.log(office) // Pass the full office data object
    return office;
  } catch (error) {
    throw new Error('Error creating office: ' + error.message);
  }
}

async function getAllOfficeDetails() {
  try {
    const offices = await Office.findAll();  // Fetch all offices, not employees
    return offices;
  } catch (error) {
    throw new Error('Error fetching all offices: ' + error.message);
  }
}

module.exports = { getOfficeByNumber, createOffice, getAllOfficeDetails };
