import express, { NextFunction, Request, Response } from "express";
import { config } from "dotenv";

import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import swaggerOptions from "./swaggerConfig";

import usersRouter from "./routes/users";

config();

const app = express();
const port = process.env.PORT || 3033;

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(express.json());

app.use("/api/users", usersRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(
    `Swagger documentation is available at http://localhost:${port}/api-docs`
  );
});
