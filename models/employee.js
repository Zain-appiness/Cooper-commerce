
module.exports=(sequelize,DataTypes)=>{
    const Employee= sequelize.define('Employee',{
        employeeNumber:{
            type: DataTypes.INTEGER,
      primaryKey: true, 
        },
        lastName: DataTypes.STRING,
        firstName: DataTypes.STRING,
        extension: DataTypes.STRING,
        email: DataTypes.STRING,
        officeCode: DataTypes.STRING,
        reportsTo: DataTypes.INTEGER,
        jobTitle: DataTypes.STRING,
    },{
        tableName:'employees',
        timestamps: false,
    });

    Employee.associate= models=>{
        Employee.belongsTo(models.Office,{
            foreignKey: 'officeCode',
            as: 'office',
        });

        Employee.belongsTo(models.Customer,{
            foreignKey: 'reportsTo',
            as: 'manager',
        });

        Employee.hasMany(models.Customer,{
            foreignKey: 'salesRepEmployeeNumber',
            as: 'customers',
        });
    };

    return Employee;
}