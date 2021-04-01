const express = require('express');

const router = express.Router();

const token = require('../../models/responses/TokenResponse');
const userSrv = require('../../services/UserService');

const ApiResponse = require('../../models/responses/ApiResponse');

router.post('/register', (req, res) => {
  const newUser = req.body;

  userSrv.resolveCreateUser(newUser).then((createdUser) => {
    if (createdUser) {
      const createdToken = token(createdUser);
      ApiResponse.successResponse(res, createdToken, { message: 'User Created' });
      return;
    }

    ApiResponse.internalErrorResponse(res, { error: 'Error creating User' });
  }).catch((err) => ApiResponse.badRequestResponse(res, { error: err.message }));
});

router.post('/sign', (req, res) => {
  userSrv.login(req.body).then((loggedUser) => {
    const createdToken = token(loggedUser);
    ApiResponse.successResponse(res, createdToken);
  }).catch((err) => ApiResponse.badRequestResponse(res, { error: err.message }));
});

module.exports = router;
