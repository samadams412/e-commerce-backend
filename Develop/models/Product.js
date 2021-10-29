// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}
// Prodcut belongs to Category and Category has many product models
// set up fields and rules for Product model
Product.init(
  {
    // define columns
    id: {
      // int, doesnt allow null, has primary key, and auto inc
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },

    product_name: {
      // string , doesnt allow null values
      type: DataTypes.STRING,
      allowNull: false
    },

    price: {
      ///decimal, doesnt allow null, and validates that value is a decimal 
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true
      }
    },

    stock: {
      // int, doesnt allow null, sets default value of 10, and validates isNumeric
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isNumeric: true
      }
    },

    category_id: {
      // int, and references the category model's id 
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id'
      }
    }
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
