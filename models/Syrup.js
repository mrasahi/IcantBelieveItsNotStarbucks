const {  Model, DataTypes } = require('sequelize')
const sequelize = require('../db')
class Syrup extends Model { }
Syrup.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    carbs_in_g: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {sequelize, modelName: 'syrups'})
module.exports = Syrup