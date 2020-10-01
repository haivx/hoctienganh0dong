"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert(
            "schedules",
            [
                {
                    course_id: 1,
                    class_level: 1,
                    class_id: 1,
                    schedule_class:
                        "Day la dai tieng noi viet nam. Phat thanh tu ha noi. Thu do nuoc cong hoa xa hoi chu nghia Viet Nam",
                    open_date: new Date(),
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
        await queryInterface.bulkDelete("schedules", null, {});
    },
};
