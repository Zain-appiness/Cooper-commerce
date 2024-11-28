const { Office } = require('../models');

async function getOfficeByNumber(officeCode) {
  try {
    const office = await Office.findOne({
      where: { officeCode: officeCode }, 
    });
    return office;
  } catch (error) {
    throw new Error('Error finding office: ' + error.message);
  }
}


async function createOffice(officeData) {  
  try {
    console.log(officeData);
    const office = await Office.create(officeData); 
    console.log(office) 
    return office;
  } catch (error) {
    throw new Error('Error creating office: ' + error.message);
  }
}

async function getAllOfficeDetails() {
  try {
    const offices = await Office.findAll(); 
    return offices;
  } catch (error) {
    throw new Error('Error fetching all offices: ' + error.message);
  }
}

module.exports = { getOfficeByNumber, createOffice, getAllOfficeDetails };
