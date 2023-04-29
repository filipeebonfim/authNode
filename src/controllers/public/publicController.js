const express = require('express');

const router = express.Router();

const token = require('../responses/TokenResponse');
const userSrv = require('../../services/UserService');

const ApiResponse = require('../responses/ApiResponse');

const logger = require('../../config/loggers/winston')('PublicController');


router.post('/register', (req, res) => {
  userSrv.resolveCreateUser(req.body).then((createdUser) => {
    if (createdUser) {
      const createdToken = token(createdUser);
      ApiResponse.successResponse(res, createdToken, { message: 'User Created' });
      return;
    }

    ApiResponse.internalErrorResponse(res, { error: 'Error creating User' });
  }).catch((err) => { 
    logger.error(err); 
    ApiResponse.badRequestResponse(res, { error: err.message });
  });
});

router.post('/login', (req, res) => {
  userSrv.login(req.body).then((loggedUser) => {
    const createdToken = token(loggedUser);
    ApiResponse.successResponse(res, createdToken);
  }).catch((err) => ApiResponse.badRequestResponse(res, { error: err.message }));
});

module.exports = router;
