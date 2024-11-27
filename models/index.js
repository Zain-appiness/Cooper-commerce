const sequelize = require('../config/database');
const { DataTypes } = require('sequelize');  

// Create an empty object to hold our models
const db = {};

// Define and export the models using the sequelize instance
db.ProductLine = require('./productLine')(sequelize, DataTypes);
db.Product = require('./product')(sequelize, DataTypes);
db.Employee = require('./employee')(sequelize, DataTypes);
db.Office = require('./office')(sequelize, DataTypes);
db.Customer = require('./customer')(sequelize, DataTypes);
db.Order = require('./order')(sequelize, DataTypes);
db.OrderDetail = require('./orderdetail')(sequelize, DataTypes);
db.Payment = require('./payment')(sequelize, DataTypes);

// Set up associations between models (if any)
db.ProductLine.associate(db);
db.Product.associate(db);
db.Employee.associate(db);
db.Office.associate(db);
db.Customer.associate(db);
db.Order.associate(db);
db.OrderDetail.associate(db);
db.Payment.associate(db);

// Add sequelize instance to db object for connection testing
db.sequelize = sequelize;
db.Sequelize = require('sequelize');

// Export db object with models and sequelize instance
module.exports = db;
