const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const NotFound = require('./src/exceptions/NotFound');
const ExceptionHandler = require('./src/middleware/ExceptionHandler');

const publicRoutes = require('./src/routes/PublicRoutes');
const userRoutes = require('./src/routes/UserRoutes');

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(bodyParser.json());
    this.server.use(cors());
    this.server.use(morgan('dev'));
  }

  routes() {
    this.server.use(publicRoutes);
    this.server.use(userRoutes);
    this.server.use((req, res, next) => {
      throw new NotFound(`Resource ${req.url} not found`);
    });

    this.server.use(ExceptionHandler);
  }
}

module.exports = new App().server;
