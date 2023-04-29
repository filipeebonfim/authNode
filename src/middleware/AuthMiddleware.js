const jwt = require('jsonwebtoken');
const Unauthorized = require('../exceptions/Unauthorized');
const sessionValidator = require('../utills/sessionValidator');
const userValidator = require('../utills/userValidator');
const RoleEnum = require('../models/RoleEnum');
const logger = require('../config/loggers/winston')('AuthMiddleware');

/**
 * This middleware will check if the request is from an authenticated user but wont block it
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const userMiddleware = (req, res, next) => {
  userValidator(req, false, null);
  next();
};

const publicAuth = (req, res, next) => {
  try {
    let sessionId = req.cookies['session-id'];
    let sessionToken = req.cookies['session-token'];

    if (!sessionToken || !sessionId || !sessionValidator(sessionToken, sessionId)) {
      const oneDayToSeconds = 24 * 60 * 60 * 1000;

      const options = {
        maxAge: oneDayToSeconds,
        httpOnly: true,
      };

      sessionId = req.sessionID;
      sessionToken = jwt.sign(sessionId, process.env.APP_AUTH_SECRET);

      res.cookie('session-id', sessionId, options);
      res.cookie('session-token', sessionToken, options);
    }

    req.headers['session-id'] = sessionId;
    req.headers['session-token'] = sessionToken;
    return next();
  } catch (e) {
    logger.log('error', e.stack);
    throw new Unauthorized(e.message);
  }
};

const userAuth = (req, res, next) => {
  logger.info('Customer verifier')
  userValidator(req, true, RoleEnum.Customer);
  next();
};

const managerAuth = (req, res, next) => {
  logger.info('Manager verifier')
  userValidator(req, true, RoleEnum.Manager);
  next();
};

module.exports = {
  publicAuth,
  userMiddleware,
  userAuth,
  managerAuth,
};
