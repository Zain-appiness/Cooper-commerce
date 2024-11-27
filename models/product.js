
module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
      productCode: {
        type: DataTypes.STRING(15),
        primaryKey: true,
        field: 'productcode',
      },
      productName: {
        type: DataTypes.STRING,
        field: 'productname',
      },
      productLine: {
        type: DataTypes.STRING,
        field: 'productline',
      },
      productScale: {
        type: DataTypes.STRING,
        field: 'productscale',
      },
      productVendor: {
        type: DataTypes.STRING,
        field: 'productvendor',
      },
      productDescription: {
        type: DataTypes.TEXT,
        field: 'productdescription',
      },
      quantityInStock: {
        type: DataTypes.INTEGER,
        field: 'quantityinstock',
      },
      buyPrice: {
        type: DataTypes.DECIMAL(10, 2),
        field: 'buyprice',
      },
      MSRP: {
        type: DataTypes.DECIMAL(10, 2),
        field: 'msrp',
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
  