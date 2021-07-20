const tables = require('../config/postgres/tables');

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(tables.ROLES_TABLE, [
    {
      type: 'Perfil 1',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      type: 'Perfil 2',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      type: 'Perfil 3',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete(tables.ROLES_TABLE, null, {}),
};
