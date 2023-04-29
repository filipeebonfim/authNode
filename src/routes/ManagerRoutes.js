const { Router } = require('express');

const { managerAuth } = require('../middleware/AuthMiddleware');

const productManagerController = require('../controllers/manager/productManagerController');

const managerRoutes = new Router();

managerRoutes.use('/manager/products', managerAuth, productManagerController);

module.exports = managerRoutes;
