const { Router } = require('express');

const { userAuth } = require('../middleware/AuthMiddleware');

const CustomerController = require('../controllers/customerController')

const customerRoutes = new Router();

customerRoutes.use('/customer', userAuth, CustomerController);

module.exports = customerRoutes;
