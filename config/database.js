// config/database.js
const { Sequelize } = require('sequelize');

// Set up for PostgreSQL connection details
const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'Cooper-Commerce',
  username: 'postgres',
  password: 'zain13',
  logging: false, // Optional, disable logging
});

module.exports = sequelize;
