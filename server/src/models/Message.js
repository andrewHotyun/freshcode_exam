'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      /*
      User.hasMany(models.Task, { --> belongsTo {}
        foreignKey: 'userId'
      });
      User.belongsToMany(models.Group, { --> belongsToMany
        through: 'users_to_groups',
        foreignKey: 'userId'
      });
      Task.belongsTo(models.User, {
        foreignKey: 'userId'
      });
      references: {
        model: 'User',
        key: 'id'
      }      
      */
    }
  };
  Message.init({
    sender: {
      type: DataTypes.NUMBER,
      allowNull: false
    },
    body: {
      type:DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Message',
    tableName: 'messages'
  });
  return Message;
};