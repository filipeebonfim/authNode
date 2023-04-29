const models = require('../config/postgres/startSequelize');
const tables = require('../config/postgres/tables');

const {
  sequelize,
  Sequelize,
} = models;

const Status = sequelize.define(tables.STATUS_TABLE, {
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

const createStatusRelation = (sequelizeModel) => {
  sequelizeModel.belongsTo(Status);
  Status.hasOne(sequelizeModel);
};

module.exports = {
  Status,
  createStatusRelation,
};
