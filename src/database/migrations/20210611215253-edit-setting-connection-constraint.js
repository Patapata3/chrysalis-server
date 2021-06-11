'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('Settings', 'Settings_web3ConnectionId_fkey')
        .then(() => queryInterface.addConstraint("Settings", {
          fields: ['web3ConnectionId'],
          name: 'Settings_web3ConnectionId_fkey',
          type: 'foreign key',
          references: {
            table: 'Web3Connections',
            field: 'id'
          },
          onDelete: 'SET NULL'}))
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('Settings', 'Settings_web3ConnectionId_fkey')
        .then(() => queryInterface.addConstraint("Settings", {
          fields: ['web3ConnectionId'],
          name: 'Settings_web3ConnectionId_fkey',
          type: 'foreign key',
          references: {
            table: 'Web3Connections',
            field: 'id'
          },
          onDelete: 'NO ACTION'}))
  }
};
