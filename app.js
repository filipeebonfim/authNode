const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();
const swaggerUI = require('swagger-ui-express');
const specs = require('./config/swaggerConfig');

const NotFound = require('./src/exceptions/NotFound');
const ExceptionHandler = require('./src/middleware/ExceptionHandler');

const productsRoute = require('./src/controllers/productController');
const publicRoute = require('./src/controllers/public/publicController');

/* Swagger instance */
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs));

app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));
app.use('/public', publicRoute);

app.use('/products', productsRoute);

app.use((req, res, next) => {
  throw new NotFound(`Resource ${req.url} not found`);
});

app.use(ExceptionHandler);

module.exports = app;
