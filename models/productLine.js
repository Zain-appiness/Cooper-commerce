// models/productline.js
module.exports = (sequelize, DataTypes) => {
  const ProductLine = sequelize.define('ProductLine', {
    productLine: {
      type: DataTypes.STRING,
      primaryKey: true,
      field: 'productline', // Matches DB column
    },
    textDescription: {
      type: DataTypes.TEXT,
      field: 'textdescription', // Matches DB column
    },
    htmlDescription: {
      type: DataTypes.TEXT,
      field: 'htmldescription', // Matches DB column
    },
    image: {
      type: DataTypes.BLOB,
      field: 'image', // Matches DB column
    },
  }, {
    tableName: 'productlines',
    timestamps: false,
  });

  ProductLine.associate = (models) => {
    ProductLine.hasMany(models.Product, {
      foreignKey: 'productLine',
      as: 'products',
    });
  };

  return ProductLine;
};
