"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable("Roles", {
            id: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
            },
            role_name: Sequelize.DataTypes.STRING,
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE,
        });
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.dropTable("Roles");
    },
};
