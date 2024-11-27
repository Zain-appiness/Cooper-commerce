// models/payment.js
module.exports = (sequelize, DataTypes) => {
  const Payment = sequelize.define('Payment', {
    customerNumber: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      field:'customernumber',
    },
    checkNumber: {
      type: DataTypes.STRING(50),
      primaryKey: true,
      allowNull: false,
      field:'checknumber',
    },
    paymentDate: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: true,
      },
      field:'paymentdate',
    },
    amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        isDecimal: true,
        min: 0,
      },
      field:'amount',
    },
  }, {
    tableName: 'payments',
    timestamps: false,
  });

  Payment.associate = models => {
    // A Payment belongs to a Customer
    Payment.belongsTo(models.Customer, {
      foreignKey: 'customerNumber',
      as: 'customer',
    });
  };

  return Payment;
};
