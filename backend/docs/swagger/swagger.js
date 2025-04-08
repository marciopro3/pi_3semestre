const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Intranet - Corretora de Seguros',
      version: '1.0.0',
      description: 'Sistema de intranet com autenticação JWT para administradores e peões.',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Ambiente Local',
      },
      {
        url: 'http://bvseguros.ddns.net:3000',
        description: 'Ambiente Produção',
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        }
      }
    },
    security: [
      {
        bearerAuth: []
      }
    ]
  },
  apis: [__dirname + '/**/*.js'], // Caminho dos arquivos com as anotações Swagger
};

const swaggerSpec = swaggerJSDoc(options);

function swaggerDocs(app) {
  // Middleware para exibir a documentação Swagger
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

module.exports = swaggerDocs;