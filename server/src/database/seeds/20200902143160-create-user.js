"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        await queryInterface.bulkInsert(
            "Users",
            [
                {
                    id: 1,
                    role_id: 1,
                    email: "haivx0206@gmail.com",
                    encryptedPassword: "11111",
                    phone: 989838891,
                    avatar:
                        "https://avatars1.githubusercontent.com/u/25798759?s=460&u=aff0bcc9b5a74eebc36e16a9b00b893cb8b69fd6&v=4",
                    full_name: "Xuan Hai",
                    createdAt: Sequelize.fn('NOW'),
                    updatedAt: Sequelize.fn('NOW'),
                },
            ],
            {}
        );
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('users', null, {});
    },
};
