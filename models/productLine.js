module.exports = (sequelize, DataTypes) => {
    const ProductLine = sequelize.define('ProductLine', {
      productLine: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      textDescription: DataTypes.TEXT,
      htmlDescription: DataTypes.TEXT,
      image: DataTypes.BLOB,
    }, {
      tableName: 'productlines',
      timestamps: false,
    });
  
    // Defining the association
    ProductLine.associate = (models) => {
      ProductLine.hasMany(models.Product, {
        foreignKey: 'productLine', // Corrected spelling of 'foreignKey'
        as: 'products',
      });
    };
  
    return ProductLine;
  };
  