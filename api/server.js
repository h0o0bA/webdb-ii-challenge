const express = require("express");
const carsRouter = require("../cars/carsRouter");
const helmet = require("helmet");

const server = express();

server.use(helmet());
server.use(express.json());
server.use("/api/cars", carsRouter);

server.get("/", (req, res) => {
  res.send("<h2>Web DB II Challange!</h2>");
});

module.exports = server;
