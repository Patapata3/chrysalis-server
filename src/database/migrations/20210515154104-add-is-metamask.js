'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
        'Settings',
        'isMetamask',
        Sequelize.BOOLEAN
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(
        'Settings',
        'isMetamask',
        Sequelize.BOOLEAN
    )
  }
};
