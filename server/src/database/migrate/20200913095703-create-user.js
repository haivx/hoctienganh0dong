'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("Users", {
      id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      role_id: Sequelize.INTEGER,
      email: Sequelize.STRING,
      encryptedPassword: Sequelize.STRING,
      phone: Sequelize.INTEGER,
      avatar: Sequelize.STRING,
      full_name: Sequelize.STRING,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
  });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Users");
  }
};