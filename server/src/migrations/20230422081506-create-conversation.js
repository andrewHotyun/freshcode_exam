'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('conversations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      participants: {
        type: Sequelize.ARRAY,
        allowNull: false
      },
      blackList: {
        field: 'black_list',
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      favoriteList: {
        field: 'favorite_list',
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      createdAt: {
        field: 'created_at',
        allowNull: false, 
        type: Sequelize.DATE
      },
      updatedAt: {
        field: 'updated_at',
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('conversations');
  }
};