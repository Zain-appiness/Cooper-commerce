
module.exports = (sequelize, DataTypes) => {
  const Office = sequelize.define('Office', {
    officeCode: {
      type: DataTypes.STRING(10),
      primaryKey: true,
      field: 'officecode', 
    },
    city: {
      type: DataTypes.STRING,
      field: 'city', 
    },
    phone: {
      type: DataTypes.STRING,
      field: 'phone', 
    },
    addressLine1: {
      type: DataTypes.STRING,
      field: 'addressline1', 
    },
    addressLine2: {
      type: DataTypes.STRING,
      field: 'addressline2', 
    },
    state: {
      type: DataTypes.STRING,
      field: 'state', 
    },
    country: {
      type: DataTypes.STRING,
      field: 'country', 
    },
    postalCode: {
      type: DataTypes.STRING,
      field: 'postalcode', 
    },
    territory: {
      type: DataTypes.STRING,
      field: 'territory', 
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
