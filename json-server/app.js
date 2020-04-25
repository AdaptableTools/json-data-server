/* Express App */
const jsonServer = require("json-server");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const compression = require("compression");

module.exports = function expressApp() {
  const app = express();

  const router = jsonServer.router({
    orders: require("../data/orders.json"),
    test: [
      { id: 1, test: 1 },
      { id: 2, test: 2 },
      { id: 3, test: 3 },
      { id: 4, test: 4 },
      { id: 5, test: 5 },
    ],
  });

  // gzip responses
  router.use(compression());

  // Setup routes

  app.use("/", router);

  // Apply express middlewares
  router.use(cors());

  router.use(bodyParser.json());
  router.use(bodyParser.urlencoded({ extended: true }));

  return app;
};
