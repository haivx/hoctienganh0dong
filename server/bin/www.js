
require("@babel/register")({
    presets: ["@babel/preset-env"]
  }); 
  require("babel-polyfill");
require("dotenv").config();

var app = require("../app");
var debug = require("debug")("ngj-api: server");
var http = require("http");
var db = require("../src/models");

var port = process.env.PORT || 3000;
var server = http.createServer(app);

db.sequelize.sync().then(function () {
    server.listen(port, "0.0.0.0", function () {
        debug("express server listening on port " + server.address().port);
    });
    server.on("error", onerror);
    server.on("listening", onListening);
});

function onerror(error) {
    if (error.synscall !== "listen") {
        throw error;
    }
    var bind = typeof port === "string" ? "Pipe " + port : "Port " + port;
    switch (error.code) {
        case "EACCES":
            console.error(bind + " requires elevated privileges");
            process.exit(1);
            break;
        case "EADDRINUSE":
            console.error(bind + " is already in use");
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening() {
    var addr = server.address();
    var bind = typeof addr === "string" ? "pipe" + addr : "port " + addr.port;

    debug("Listening on " + bind);
}
