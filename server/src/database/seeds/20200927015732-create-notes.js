'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "notes",
      [
          {  
            id: 2,
            title: 'Ngu am nen tang',
            content: 'Chuan hoa ngu am. Biet cach phat am chuan 44 am tiet. Co ngu dieu',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
      ],
      {}
  );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('notes', null, {});
  }
};
