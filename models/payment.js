
module.exports = (sequelize, DataTypes) => {
    const Payment = sequelize.define('Payment', {
      customerNumber: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      checkNumber: {
        type: DataTypes.STRING(50),
        primaryKey: true,
      },
      paymentDate: DataTypes.DATE,
      amount: DataTypes.DECIMAL(10, 2),
    }, {
      tableName: 'payments',
      timestamps: false,
    });
  
    Payment.associate = models => {
      Payment.belongsTo(models.Customer, {
        foreignKey: 'customerNumber',
        as: 'customer',
      });
    };
  
    return Payment;
  };
  