const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  process.env.APP_DB_NAME,
  process.env.APP_DB_USER,
  process.env.APP_DB_PASSWORD,
  {
    host: process.env.AP_DB_HOST,
    dialect: 'postgres',
    logging: false,
    useUTC: false, // for reading from database
    timezone: '-03:00', // for writing to database
  },
);

module.exports = {
  Sequelize,
  sequelize,
};
