"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert(
            "users_classes",
            [
                {  
                  id: 1, 
                  student_id: 1,
                  course_id: 1,
                  createdAt: new Date(),
                  updatedAt: new Date(),
                },
            ],
            {}
        );
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('users_classes', null, {});
    },
};
