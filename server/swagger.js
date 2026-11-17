const swaggerJsdoc = require("swagger-jsdoc");

const { PORT = 5000 } = process.env;

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "React Architecture API",
      version: "1.0.0",
      description: "API documentation for the server",
    },
    servers: [
      {
        url: `http://localhost:${PORT}/api`,
      },
    ],
    components: {
      securitySchemes: {
        cookieAuth: {
          type: "apiKey",
          in: "cookie",
          name: "accessToken",
        },
      },
    },
  },
  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
