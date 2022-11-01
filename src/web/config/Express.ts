import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";

import * as path from "path";
import { DbContext } from "@data-layer/DbContext";
import { BaseController } from "./controllers/";
import { attachControllers } from "@decorators/express";
import { Container } from "@decorators/di";

const health = require("express-ping");

export class ExpressConfig {
  app: express.Express;
  router: express.Router;
  dbContext: DbContext;
  constructor() {
    this.dbContext = Container.get<DbContext>(DbContext);
    this.connectDB();
    this.app = express();
    this.router = express.Router();
    this.app.use(cors());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(bodyParser.json());
    this.app.use(health.ping());
    this.app.use(helmet());
    this.setUpControllers();
    this.app.use("/api/v1", this.router);
    this.app.use(this.unmatchedRoutesHandlder);
  }

  setUpControllers() {
    attachControllers(this.router, [BaseController]);
  }

  async connectDB() {
    await this.dbContext.connect();
  }

  unmatchedRoutesHandlder(req: any, res: any) {
    res.json({
      error: {
        name: "Error",
        status: 404,
        message: "Invalid Request",
        statusCode: 404,
      },
      message: "Invalid Request!",
    });
  }
}
