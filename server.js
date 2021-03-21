const http = require('http');

const port = process.env.PORT || 3000;
const logger = require('./config/loggers/winston');

require('dotenv').config();
require('./config/postgres/syncTables')(logger);
const app = require('./app');

const server = http.createServer(app);

const onError = (error) => {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string'
    ? `Pipe ${port}`
    : `Port ${port}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      logger.log('error', `${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      logger.log('error', `${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const onListening = () => {
  const addr = server.address();
  const bind = typeof addr === 'string'
    ? addr
    : `${addr.port}/`;
  logger.log('info', `Listening on http://localhost:${bind}`);
};

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
