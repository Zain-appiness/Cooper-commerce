

module.exports=(sequelize,DataTypes)=>{
    const Product= sequelize.define('Product',{
        productCode:{
            type: DataTypes.STRING(15),
            primaryKey: true,
        },
        productName: DataTypes.STRING,
        productLine: DataTypes.STRING,
        productScale: DataTypes.STRING,
        productVendor: DataTypes.STRING,
        productDescription: DataTypes.TEXT,
        quantityInStock: DataTypes.INTEGER,
        buyPrice: DataTypes.DECIMAL(10, 2),
        MSRP: DataTypes.DECIMAL(10, 2),
    },{
        tableName:'products',
        timestamps: false,
    });

    Product.associate = models=>{
        Product.belongsTo(models.ProductLine,{
            foreignKey: 'productLine',
            as: 'productLineDetails',
        });

    Product.hasMany(models.OrderDetail,{
        foreignKey: 'productCode',
      as: 'orderDetails',
    });
    };

    return Product;

}