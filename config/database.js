
const { Sequelize } = require('sequelize');

// Set up for PostgreSQL connection details
const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  port: 3306,
  database: 'cooper-commerce',
  username: 'root',
  password: 'zain13',
  logging: false, // Optional, disable logging
});

module.exports = sequelize;
