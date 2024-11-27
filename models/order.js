
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    orderNumber: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      field:'ordernumber',

    },
    orderDate: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: true,
      },
      field:'orderdate',
    },
    requiredDate: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: true,
      },
      field:'requireddate',
    },
    shippedDate: {
      type: DataTypes.DATE,
      allowNull: true,
      validate: {
        isDate: true,
      },
      field:'shippeddate',
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
      field:'status',
    },
    comments: {
      type: DataTypes.TEXT,
      allowNull: true,
      field:'comments',
    },
    customerNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field:'customernumber',
    },
  }, {
    tableName: 'orders',
    timestamps: false,
  });

  Order.associate = models => {
    // An Order belongs to a Customer
    Order.belongsTo(models.Customer, {
      foreignKey: 'customerNumber',
      as: 'customer',
    });

    // An Order has many OrderDetails
    Order.hasMany(models.OrderDetail, {
      foreignKey: 'orderNumber',
      as: 'orderDetails',
    });
  };

  return Order;
};
