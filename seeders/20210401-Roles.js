const tables = require('../config/postgres/tables');

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(tables.ROLES_TABLE, [
    {
      type: 'Consumer',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      type: 'Retailer',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      type: 'Driver',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      type: 'Administrator',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete(tables.ROLES_TABLE, null, {}),
};
