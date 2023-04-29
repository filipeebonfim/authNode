const express = require('express');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
const morgan = require('morgan');
const { publicAuth } = require('./src/middleware/AuthMiddleware');

const NotFound = require('./src/exceptions/NotFound');
const ExceptionHandler = require('./src/middleware/ExceptionHandler');

const publicRoutes = require('./src/routes/PublicRoutes');
const userRoutes = require('./src/routes/UserRoutes');
const managerRoutes = require('./src/routes/ManagerRoutes');

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(cookieParser());
    this.server.use(bodyParser.json())
    this.server.use(session({
      secret: '34SDgsdgspxxxxxxxdfsG',
      resave: false,
      saveUninitialized: true,
    }));
    this.server.use(cors());
    this.server.use(morgan('dev'));
    this.server.use(publicAuth);
  }

  routes() {
    this.server.use(userRoutes);
    this.server.use(managerRoutes);
    this.server.use(publicRoutes);

    this.server.use((req, res, next) => {
      throw new NotFound(`Resource ${req.url} not found`);
    });

    this.server.use(ExceptionHandler);
  }
}

module.exports = new App().server;
