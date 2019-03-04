const express = require("express");
const app = express();
const api = require("./api/routes");
const path = require("path");

app.use(express.json());
app.use("/api", api);

app.get("/", (req, res, next) => {
    res.sendFile(path.join(__dirname,'index.html'));
});

module.exports = app;