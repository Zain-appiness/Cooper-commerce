// models/orderdetail.js
module.exports = (sequelize, DataTypes) => {
  const OrderDetail = sequelize.define('OrderDetail', {
    orderNumber: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      field:'ordernumber',
    },
    productCode: {
      type: DataTypes.STRING(15),
      primaryKey: true,
      allowNull: false,
      field:'productcode',
    },
    quantityOrdered: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: true,
        min: 1,
      },
      field:'quantityordered',
    },
    priceEach: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        isDecimal: true,
      },
      field:'priceeach',
    },
    orderLineNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: true,
      },
      field:'orderlinenumber',
    },
  }, {
    tableName: 'orderdetails',
    timestamps: false,
  });

  OrderDetail.associate = models => {
    // An OrderDetail belongs to an Order
    OrderDetail.belongsTo(models.Order, {
      foreignKey: 'orderNumber',
      as: 'order',
    });

    // An OrderDetail belongs to a Product
    OrderDetail.belongsTo(models.Product, {
      foreignKey: 'productCode',
      as: 'product',
    });
  };

  return OrderDetail;
};
