
module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
      orderNumber: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      orderDate: DataTypes.DATE,
      requiredDate: DataTypes.DATE,
      shippedDate: DataTypes.DATE,
      status: DataTypes.STRING,
      comments: DataTypes.TEXT,
      customerNumber: DataTypes.INTEGER,
    }, {
      tableName: 'orders',
      timestamps: false,
    });
  
    Order.associate = models => {
      Order.belongsTo(models.Customer, {
        foreignKey: 'customerNumber',
        as: 'customer',
      });
  
      Order.hasMany(models.OrderDetail, {
        foreignKey: 'orderNumber',
        as: 'orderDetails',
      });
    };
  
    return Order;
  };
  