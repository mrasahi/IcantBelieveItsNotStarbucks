const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')
class Bean extends Model { }
Bean.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  caffeine_in_mg: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, { sequelize, modelName: 'beans' })

module.exports = Bean