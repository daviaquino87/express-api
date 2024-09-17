import "express-async-errors";
import express from "express";
import cors from "cors";

import { router } from "./routes";
import { env } from "./config/env";
import { verifyError } from "./middlewares/verify-error";
import { verifyRouteNotFound } from "./middlewares/verify-route-not-found";
import { createConnection } from "./database";
import { Logger } from "./config/logger";

function bootstrap() {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cors());

  app.use(router);

  app.use(verifyRouteNotFound);
  app.use(verifyError);

  app.listen(env.PORT, () => {
    console.log("Server running on port " + env.PORT);
  });
}

createConnection()
  .then(() => {
    bootstrap();
  })
  .catch((err) => {
    Logger.error(err);
    process.exit(1);
  });
