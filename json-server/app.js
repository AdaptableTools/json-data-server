/* Express App */
const jsonServer = require("json-server");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const compression = require("compression");

/* My express App */
module.exports = function expressApp(functionName) {
  const app = express();
  // const router = express.Router();

  const router = jsonServer.router({
    orders: require("./data/orders.json"),
    test: [
      { id: 1, test: 1 },
      { id: 2, test: 2 },
      { id: 3, test: 4 },
    ],
  });

  // gzip responses
  router.use(compression());

  // Set router base path for local dev
  // const routerBasePath =
  //   process.env.NODE_ENV === "dev"
  //     ? `/${functionName}`
  //     : `/.netlify/functions/${functionName}/`;

  // Attach logger

  // Setup routes
  app.use("/", cors());
  app.use("/", router);

  const middlewares = jsonServer.defaults({
    static: ".",
  });

  router.use(middlewares);

  // Apply express middlewares
  app.use(cors());
  router.use(cors());
  router.use(bodyParser.json());
  router.use(bodyParser.urlencoded({ extended: true }));

  return app;
};
