const express = require("express");
const app = express();
const router = require("./api/routes");

app.use("/api", router);

module.exports = app;