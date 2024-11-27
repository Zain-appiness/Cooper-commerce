// models/employee.js
module.exports = (sequelize, DataTypes) => {
    const Employee = sequelize.define('Employee', {
      employeeNumber: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        field: 'employeenumber', // Matches DB column
      },
      lastName: {
        type: DataTypes.STRING,
        field: 'lastname', // Matches DB column
      },
      firstName: {
        type: DataTypes.STRING,
        field: 'firstname', // Matches DB column
      },
      extension: {
        type: DataTypes.STRING,
        field: 'extension', // Matches DB column
      },
      email: {
        type: DataTypes.STRING,
        field: 'email', // Matches DB column
      },
      officeCode: {
        type: DataTypes.STRING,
        field: 'officecode', // Matches DB column
      },
      reportsTo: {
        type: DataTypes.INTEGER,
        field: 'reportsto', // Matches DB column
      },
      jobTitle: {
        type: DataTypes.STRING,
        field: 'jobtitle', // Matches DB column
      },
    }, {
      tableName: 'employees',
      timestamps: false,
    });
  
    Employee.associate = (models) => {
      Employee.belongsTo(models.Office, {
        foreignKey: 'officeCode',
        as: 'office',
      });
  
      Employee.belongsTo(models.Employee, {
        foreignKey: 'reportsTo',
        as: 'manager',
      });
  
      Employee.hasMany(models.Customer, {
        foreignKey: 'salesRepEmployeeNumber',
        as: 'customers',
      });
    };
  
    return Employee;
  };
  