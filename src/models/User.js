const {
  sequelize,
  Sequelize,
} = require('../config/postgres/startSequelize');

const tables = require('../config/postgres/tables');

const User = sequelize.define(tables.USERS_TABLE, {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
  },
  login: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
}, {
  timestamps: true,
  paranoid: true,
  freezeTableName: true,
});

const { createRoleRelation } = require('./Role');
const { createStatusRelation } = require('./Status');

createRoleRelation(User);
createStatusRelation(User);

module.exports = User;
