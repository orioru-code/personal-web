const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const { API_VERSION } = require("./config");

//Load Routings

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Configure Header HTTP

//Basic router

module.exports = app;
