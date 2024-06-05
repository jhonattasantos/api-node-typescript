import { SwaggerDefinition, Options } from "swagger-jsdoc";
import { config } from "dotenv";

config();
const port = process.env.PORT || 3033;

const swaggerDefinition: SwaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Minha API Express com TypeScript",
    version: "1.0.0",
    description: "Documentação da API com Swagger",
  },
  servers: [
    {
      url: `http://localhost:${port}`,
      description: "Servidor de desenvolvimento",
    },
  ],
};

const swaggerOptions: Options = {
  swaggerDefinition,
  apis: ["./src/routes/*.ts"], // Ajuste o caminho conforme necessário
};

export default swaggerOptions;
