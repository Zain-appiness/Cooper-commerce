module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    customerNumber: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      field:'customernumber',
    },
    customerName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true, 
      },
      
      field:'customername',
    },
    contactLastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
      field:'customerlastname',
    },
    contactFirstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
      field:'customerfirstname',
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
      
      field:'phone',
    },
    addressLine1: {
      type: DataTypes.STRING,
      allowNull: false,
      
      field:'addressline1',
    },
    addressLine2: {
      type: DataTypes.STRING,
      allowNull: true,
      field:'addressline2',
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
      field:'city',
    },
    state: {
      type: DataTypes.STRING,
      allowNull: true,
      field:'state',
    },
    postalCode: {
      type: DataTypes.STRING,
      allowNull: true,
      field:'postalcode',
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
      field:'country',
    },
    salesRepEmployeeNumber: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'employees', 
        key: 'employeenumber',
      },
      field:'salesrepemployeenumber',
    },
    creditLimit: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
      validate: {
        isDecimal: true, 
        min: 0,
      },
      field:'creditlimit',
    },
  }, {
    tableName: 'customers',
    timestamps: false,
  });

  Customer.associate = models => {
   
    Customer.belongsTo(models.Employee, {
      foreignKey: 'salesRepEmployeeNumber',
      as: 'salesRep',
    });

    
    Customer.hasMany(models.Order, {
      foreignKey: 'customerNumber',
      as: 'orders',
    });
  };

  return Customer;
};
