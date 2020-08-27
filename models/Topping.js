const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')
class Topping extends Model { }
Topping.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  drizzle: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  sprinkle: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, { sequelize, modelName: 'toppings' })
module.exports = Topping