const { Router } = require('express');

const { managerAuth } = require('../middleware/AuthMiddleware');

const managerRoutes = new Router();

managerRoutes.use('/manager', managerAuth);

module.exports = managerRoutes;
