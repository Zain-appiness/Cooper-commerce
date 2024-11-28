const officeService = require('../service/officeService')

async function createOffice(req, res) {
  try {
    const officeData = req.body;
    const office = await officeService.createOffice(officeData);
    res.status(201).json({
      message: 'Office created successfully',
      office,
    });
  }  catch (error) {
    console.error('Error creating office:', error);
    
    if (error.errors) {
      error.errors.forEach(e => {
        console.error(`Validation Error: ${e.message}`);
      });
    }
    res.status(400).json({
      error: 'Validation error',
      message: error.errors ? error.errors.map(e => e.message) : error.message,
    });
  }
}

async function getOffice(req, res) {
  try {
    const { officeCode } = req.params;
    const office = await officeService.getOfficeByNumber(officeCode);
    if (!office) {
      return res.status(404).json({ error: 'Office not found' });
    }
    res.status(200).json(office);
  } catch (error) {
    console.error('Error fetching office:', error.message);
    res.status(400).json({
      error: 'FAILED TO FETCH OFFICE',
      details: error.message,
    });
  }
}

async function getAllOffices(req, res) {
  try {
    const offices = await officeService.getAllOfficeDetails();
    res.status(200).json(offices);
  } catch (error) {
    console.error('Error fetching all offices:', error.message);
    res.status(400).json({
      error: 'FAILED TO FETCH OFFICES',
      details: error.message,
    });
  }
}

module.exports = {
  createOffice,
  getOffice,
  getAllOffices,
};
