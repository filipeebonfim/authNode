const models = require('../config/postgres/startSequelize');
const tables = require('../config/postgres/tables');

const {
  sequelize,
  Sequelize,
} = models;

const Role = sequelize.define(tables.ROLES_TABLE, {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  type: {
    type: Sequelize.STRING,
  },
}, {
  timestamps: true,
  paranoid: true,
  freezeTableName: true,
});

const createRoleRelation = (sequelizeModel) => {
  sequelizeModel.belongsTo(Role);
  Role.hasOne(sequelizeModel);
};

module.exports = {
  Role,
  createRoleRelation,
};
