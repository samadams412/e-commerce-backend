const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns

    id: {
      //int, doesnt allow null, has primary key, and auto inc
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_id: {
      // int, references the product models ID
      type: DataTypes.INTEGER,
      references: {
        model: 'product',
        key: 'id'
      }
    },

    tag_id: {
      
      type: DataTypes.INTEGER,
      // int, refernces the tag models ID
      references: {
        model: 'tag',
        key: 'id'
      }
    }
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
