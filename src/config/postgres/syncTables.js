/* eslint-disable no-unused-vars */
/* eslint-disable import/no-dynamic-require */

const modelDir = '../../models/';
const path = require('path');

const User = require(path.join(modelDir, 'User'));
const { Role } = require(`${modelDir}Role`);
const { Status } = require(`${modelDir}Status`);

const syncTables = (logger) => {
  const models = [
    // Status,
    // Role,
    // User,
  ];

  models.forEach((model) => {
    model.sync({
      alter: true,
    }).then(() => logger.log('info', `Updated table: ${model.name} - Success`))
      .catch((err) => logger.log('error', `Updated table: ${model.name} - Fail:\n${err}`));
  });
};

module.exports = syncTables;
