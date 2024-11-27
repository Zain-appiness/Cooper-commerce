// models/office.js
module.exports = (sequelize, DataTypes) => {
  const Office = sequelize.define('Office', {
    officeCode: {
      type: DataTypes.STRING(10),
      primaryKey: true,
      field: 'officecode', // Matches DB column
    },
    city: {
      type: DataTypes.STRING,
      field: 'city', // Matches DB column
    },
    phone: {
      type: DataTypes.STRING,
      field: 'phone', // Matches DB column
    },
    addressLine1: {
      type: DataTypes.STRING,
      field: 'addressline1', // Matches DB column
    },
    addressLine2: {
      type: DataTypes.STRING,
      field: 'addressline2', // Matches DB column
    },
    state: {
      type: DataTypes.STRING,
      field: 'state', // Matches DB column
    },
    country: {
      type: DataTypes.STRING,
      field: 'country', // Matches DB column
    },
    postalCode: {
      type: DataTypes.STRING,
      field: 'postalcode', // Matches DB column
    },
    territory: {
      type: DataTypes.STRING,
      field: 'territory', // Matches DB column
    },
  }, {
    tableName: 'offices',
    timestamps: false,
  });

  Office.associate = (models) => {
    Office.hasMany(models.Employee, {
      foreignKey: 'officeCode',
      as: 'employees',
    });
  };

  return Office;
};
