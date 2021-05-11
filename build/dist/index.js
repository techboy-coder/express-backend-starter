"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var boxen_1 = __importDefault(require("boxen"));
var app = require("express")();
var routes = require("./routes");
var compression = require('compression');
console.log("\n\n\n\n\n");
app.use(compression());
//All Routes
app.use("/api", routes);
app.use(function (req, res, next) {
    var error = new Error("Not found");
    error.status = 404;
    next(error);
});
// error handler middleware
app.use(function (error, req, res, next) {
    res.status(error.status || 500).send({
        error: {
            status: error.status || 500,
            message: error.message || 'Internal Server Error',
        },
    });
});
var PORT = process.env.PORT || 4000;
app.listen(PORT, function () {
    console.log(boxen_1.default("Hey there master! \uD83D\uDC96 Server started and ready to scale to the moon. \uD83D\uDE80 Visit me on: http://localhost:" + PORT, { padding: 1 }));
});
//# sourceMappingURL=index.js.map