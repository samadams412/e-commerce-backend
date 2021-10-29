const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // define columns
    // Category has params id(INTEGER), and category_name(STRING)
    id: {
      // does not allow null, has primary key, and auto_increment
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
  
    category_name: {
      //does not allow null, and type String
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
