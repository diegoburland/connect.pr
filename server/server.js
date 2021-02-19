require("dotenv").config();
const express = require("express");
const { dbConnection } = require("../database/config");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.carsPath = "/api/cars";
    this.middlewares();
    this.routes();
    this.connection();
  }

  routes() {
    this.app.use(this.carsPath, require("../routes/cars.route"));
  }

  middlewares() {
    this.app.use(express.json());
  }

  listen() {
    this.app.listen(this.port);
  }

  async connection() {
    await dbConnection();
  }
}

module.exports = Server;
