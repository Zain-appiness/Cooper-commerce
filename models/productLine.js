
module.exports = (sequelize, DataTypes) => {
  const ProductLine = sequelize.define('ProductLine', {
    productLine: {
      type: DataTypes.STRING,
      primaryKey: true,
      field: 'productline', 
    },
    textDescription: {
      type: DataTypes.TEXT,
      field: 'textdescription', 
    },
    htmlDescription: {
      type: DataTypes.TEXT,
      field: 'htmldescription', 
    },
    image: {
      type: DataTypes.BLOB,
      field: 'image', 
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
