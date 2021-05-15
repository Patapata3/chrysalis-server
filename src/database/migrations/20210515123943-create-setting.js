'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Settings', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            web3ConnectionId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Web3Connections',
                    key: 'id'
                }
            },
            accountId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Accounts',
                    key: 'id'
                }
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Settings');
    }
};