const express = require("express");
const routes = require("./routes");
const db = require("./db");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

module.exports = app;
