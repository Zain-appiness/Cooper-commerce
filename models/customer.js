
module.exports=(sequelize,DataTypes)=>{
    const Customer= sequelize.define('customer',{
        customerNumber: {
            type: DataTypes.INTEGER,
            primaryKey: true,
          },
          customerName: DataTypes.STRING,
          contactLastName: DataTypes.STRING,
          contactFirstName: DataTypes.STRING,
          phone: DataTypes.STRING,
          addressLine1: DataTypes.STRING,
          addressLine2: DataTypes.STRING,
          city: DataTypes.STRING,
          state: DataTypes.STRING,
          postalCode: DataTypes.STRING,
          country: DataTypes.STRING,
          salesRepEmployeeNumber: DataTypes.INTEGER,
          creditLimit: DataTypes.DECIMAL(10, 2),
          
    },{
        tableName: 'customers',
        timestamps: false,
    });

    Customer.associate = models => {
        // A Customer belongs to an Employee (Sales Rep)
        Customer.belongsTo(models.Employee, {
          foreignKey: 'salesRepEmployeeNumber',
          as: 'salesRep',
        });
    
        // A Customer has many Orders
        Customer.hasMany(models.Order, {
          foreignKey: 'customerNumber',
          as: 'orders',
        });
      };
    
      return Customer;
}