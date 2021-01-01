'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'tutorial_tag', 
      { 
        tutorial_id: {
          type: Sequelize.INTEGER,
          primaryKey: true
        },
        tag_id: {
          type: Sequelize.UUID,
          primaryKey: true
        } 
      });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('tutorial_tag');
  }
};
