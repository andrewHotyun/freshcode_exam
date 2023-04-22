'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Conversation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Conversation.init({
    participants: {
      type: DataTypes.ARRAY,
      allowNull: false
    }, 
    blackList: {
      field: 'black_list',
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    favoriteList: {
      field: 'favorite_list',
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Conversation',
    tableName: 'conversations',
    underscored: true
  });
  return Conversation;
};