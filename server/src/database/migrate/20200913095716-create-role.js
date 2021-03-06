'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
      return queryInterface.createTable("roles", {
          id: {
              type: Sequelize.INTEGER,
              primaryKey: true,
              autoIncrement: true
          },
          role_name: Sequelize.STRING,
          createdAt: Sequelize.DATE,
          updatedAt: Sequelize.DATE,
      });
  },

  down: async (queryInterface, Sequelize) => {
      return queryInterface.dropTable("roles");
  },
};