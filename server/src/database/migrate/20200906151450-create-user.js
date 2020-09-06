'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("Users", {
      id: {
          type: Sequelize.DataTypes.INTEGER,
          primaryKey: true,
      },
      role_id: Sequelize.DataTypes.INTEGER,
      email: Sequelize.DataTypes.STRING,
      encryptedPassword: Sequelize.DataTypes.STRING,
      phone: Sequelize.DataTypes.INTEGER,
      avatar: Sequelize.DataTypes.STRING,
      full_name: Sequelize.DataTypes.STRING,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
  });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Users");
  }
};
