import express from "express";
import cors from "cors";
import * as routes from "./routes";

class App {
  public server = express();

  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
    this.server.use(express.urlencoded({ extended: false }));
  }

  routes() {
    this.server.use("/api/solutoria", routes.SolutoriaRouter);
  }
}

export default new App().server;
