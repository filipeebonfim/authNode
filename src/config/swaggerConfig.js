const swaggerJsDoc = require('swagger-jsdoc');

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    infooo: {
      title: 'Auth Service API',
      version: '1.0.0',
      description: 'Just a service to manage the authentication and practice the routes controll',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./src/controllers/*.js'],
};

module.exports = swaggerJsDoc(options);
