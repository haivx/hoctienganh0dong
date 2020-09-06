const express = require('express')
const logger = require('morgan')
const path = require('path')
const cookiePaser = require("cookie-parser")
const bodyPaser = require("body-parser")
const cors = require('cors')
const routes = require('./src/routes')

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(
    bodyPaser.urlencoded({
        extended: false,
    })
);

app.use(bodyPaser.json());
app.use(cookiePaser());
app.use(express.static(path.join(__dirname, "public")));
app.use("/v1", routes());

module.exports = app;
