
module.exports=(sequelize,DataTypes)=>{
    const Office=sequelize.define('Office',{
        officeCode: {
            type: DataTypes.STRING(10),
            primaryKey: true,
          },
          city: DataTypes.STRING,
          phone: DataTypes.STRING,
          addressLine1: DataTypes.STRING,
          addressLine2: DataTypes.STRING,
          state: DataTypes.STRING,
          country: DataTypes.STRING,
          postalCode: DataTypes.STRING,
          territory: DataTypes.STRING,
        }, {
          tableName: 'offices',
          timestamps: false,
    });
    Office.associate = models => {
        Office.hasMany(models.Employee, {
          foreignKey: 'officeCode',
          as: 'employees',
        });
      };
    
      return Office;
    };