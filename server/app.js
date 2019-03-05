const express = require("express");
const app = express();
const api = require("./api/routes");
const path = require("path");

app.use(express.json());
app.use("/api", api);
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get("/*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "index.html"));
});

app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send(err.message || "Internal server error");
});

module.exports = app;
