
module.exports = (sequelize, DataTypes) => {
    const Employee = sequelize.define('Employee', {
      employeeNumber: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        field: 'employeenumber', 
      },
      lastName: {
        type: DataTypes.STRING,
        field: 'lastname', 
      },
      firstName: {
        type: DataTypes.STRING,
        field: 'firstname', 
      },
      extension: {
        type: DataTypes.STRING,
        field: 'extension', 
      },
      email: {
        type: DataTypes.STRING,
        field: 'email', 
      },
      officeCode: {
        type: DataTypes.STRING,
        field: 'officecode', 
      },
      reportsTo: {
        type: DataTypes.INTEGER,
        field: 'reportsto', 
      },
      jobTitle: {
        type: DataTypes.STRING,
        field: 'jobtitle', 
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
  