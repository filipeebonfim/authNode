const swaggerJsDoc = require('swagger-jsdoc');

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    infooo: {
      title: 'Fruta Doce API',
      version: '1.0.0',
      description: 'The kernel of Fruta Doce API',
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
