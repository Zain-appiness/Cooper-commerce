// models/product.js
module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
      productCode: {
        type: DataTypes.STRING(15),
        primaryKey: true,
        field: 'productcode', // Matches DB column
      },
      productName: {
        type: DataTypes.STRING,
        field: 'productname', // Matches DB column
      },
      productLine: {
        type: DataTypes.STRING,
        field: 'productline', // Matches DB column
      },
      productScale: {
        type: DataTypes.STRING,
        field: 'productscale', // Matches DB column
      },
      productVendor: {
        type: DataTypes.STRING,
        field: 'productvendor', // Matches DB column
      },
      productDescription: {
        type: DataTypes.TEXT,
        field: 'productdescription', // Matches DB column
      },
      quantityInStock: {
        type: DataTypes.INTEGER,
        field: 'quantityinstock', // Matches DB column
      },
      buyPrice: {
        type: DataTypes.DECIMAL(10, 2),
        field: 'buyprice', // Matches DB column
      },
      MSRP: {
        type: DataTypes.DECIMAL(10, 2),
        field: 'msrp', // Matches DB column
      },
    }, {
      tableName: 'products',
      timestamps: false,
    });
  
    Product.associate = (models) => {
      Product.belongsTo(models.ProductLine, {
        foreignKey: 'productLine',
        as: 'productLineDetails',
      });
  
      Product.hasMany(models.OrderDetail, {
        foreignKey: 'productCode',
        as: 'orderDetails',
      });
    };
  
    return Product;
  };
  