'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "lessons",
      [
          {
            video: 'xvideos.xxxx',
            title: 'This is fake',
            homework: 'DOnt do this',
            documents: 'Documents ',
            course_id: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
      ],
      {}
  );
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('lessons', null, {});
  }
};
