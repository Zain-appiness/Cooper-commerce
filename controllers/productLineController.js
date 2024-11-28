const productLineService = require('../service/prouctLineService');

async function createProductLine(req, res) {
  try {
    const productLineData = req.body;
    const productLine = await productLineService.createProductLine(productLineData);
    res.status(201).json(productLine);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create product line', details: error.message });
  }
}

async function getProductLine(req, res) {
  try {
    const { productLineCode } = req.params;
    const productLine = await productLineService.getProductLine(productLineCode);
    if (!productLine) return res.status(404).json({ error: 'Product line not found' });
    res.status(200).json(productLine);
  } catch (error) {
    res.status(400).json({ error: 'Failed to retrieve product line', details: error.message });
  }
}

module.exports = { createProductLine, getProductLine};
