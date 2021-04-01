const tables = require('../config/postgres/tables');

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(tables.STATUS_TABLE, [
    {
      type: 'Initial',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      type: 'Pendent',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      type: 'Accept',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete(tables.STATUS_TABLE, null, {}),
};
