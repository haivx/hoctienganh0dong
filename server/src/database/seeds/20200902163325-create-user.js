"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert(
            "users",
            [
                {
                    id: 1,
                    role_id: 2,
                    email: "xuanhaiiea@gmail.com",
                    encryptedPassword: "11111",
                    phone: 989838891,
                    avatar:
                        "https://avatars1.githubusercontent.com/u/25798759?s=460&u=aff0bcc9b5a74eebc36e16a9b00b893cb8b69fd6&v=4",
                    full_name: "Xuan Hai",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },

                {
                    id: 1,
                    role_id: 2,
                    email: "dimitar@gmail.com",
                    encryptedPassword: "123456",
                    phone: 989838891,
                    avatar:
                        "https://avatars1.githubusercontent.com/u/25798759?s=460&u=aff0bcc9b5a74eebc36e16a9b00b893cb8b69fd6&v=4",
                    full_name: "dimitar",
                    createdAt: new Date(),
                    updatedAt: new Date(),
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
