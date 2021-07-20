const jwt = require('jsonwebtoken');
const Unauthorized = require('../exceptions/Unauthorized');

const logger = require('../../config/loggers/winston')('UserValidator');

module.exports = (req, onlyUsers, role) => {
  try {
    const token = req.headers.authorization;

    if (!token && onlyUsers) throw new Error('Authorization header not found');

    const decoded = jwt.verify(token, process.env.APP_AUTH_SECRET);

    if (role && (role !== decoded.role && decoded.role !== 'Administrator')) {
      throw new Unauthorized('User doesn\'t has access to this resource');
    }

    req.user = decoded;
  } catch (e) {
    if (onlyUsers) {
      logger.log('error', e.stack);
      throw new Unauthorized(e.message);
    }
  }
};
