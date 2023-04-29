const express = require('express');

const router = express.Router();
const { successResponse } = require('../responses/ApiResponse');

const logger = require('../../config/loggers/winston')('ProductManagerController');

router.post('/', (req, res) => {
  logger.info('You are a manager', req.user);
  successResponse(res, 'You are a manager for sure');
});

module.exports = router;
