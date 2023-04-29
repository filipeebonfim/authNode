const tables = require('../src/config/postgres/tables');
const RoleEnum = require('../src/models/RoleEnum');

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(tables.ROLES_TABLE, [
    {
      type: RoleEnum.Customer,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      type: RoleEnum.Manager,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      type: RoleEnum.User,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete(tables.ROLES_TABLE, null, {}),
};
