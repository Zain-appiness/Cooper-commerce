
module.exports = (sequelize, DataTypes) => {
    const OrderDetail = sequelize.define('OrderDetail', {
      orderNumber: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      productCode: {
        type: DataTypes.STRING(15),
        primaryKey: true,
      },
      quantityOrdered: DataTypes.INTEGER,
      priceEach: DataTypes.DECIMAL(10, 2),
      orderLineNumber: DataTypes.INTEGER,
    }, {
      tableName: 'orderdetails',
      timestamps: false,
    });
  
    OrderDetail.associate = models => {
    
      OrderDetail.belongsTo(models.Order, {
        foreignKey: 'orderNumber',
        as: 'order',
      });
  
     
      OrderDetail.belongsTo(models.Product, {
        foreignKey: 'productCode',
        as: 'product',
      });
    };
  
    return OrderDetail;
  };
  