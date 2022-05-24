const { DataTypes, Sequelize } = require('sequelize')
const sequelize = new Sequelize(require('../../config/database'))

const Product = sequelize.define("Product", {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.FLOAT
})

module.exports = Product
