"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.morganMiddleware = void 0;
var bodyParser = require('body-parser');
var chalk = require("chalk");
var router = require("express").Router();
var morgan = require('morgan');
var cors_1 = __importDefault(require("cors"));
var express_session_1 = __importDefault(require("express-session"));
var passport_1 = __importDefault(require("passport"));
exports.morganMiddleware = morgan(function (tokens, req, res) {
    return [
        '\n\n\n',
        chalk.hex('#ff4757').bold('🍄  Morgan --> '),
        chalk.hex('#34ace0').bold(tokens.method(req, res)),
        chalk.hex('#ffb142').bold(tokens.status(req, res)),
        chalk.hex('#ff5252').bold(tokens.url(req, res)),
        chalk.hex('#2ed573').bold(tokens['response-time'](req, res) + ' ms'),
        chalk.hex('#f78fb3').bold('@ ' + tokens.date(req, res)),
        chalk.yellow(tokens['remote-addr'](req, res)),
        chalk.hex('#fffa65').bold('from ' + tokens.referrer(req, res)),
        chalk.hex('#1e90ff')(tokens['user-agent'](req, res)),
        '\n\n\n',
    ].join(' ');
});
router.use(exports.morganMiddleware);
router.use(cors_1.default({ origin: "http://localhost:3000", credentials: true }));
router.use(express_session_1.default({
    secret: "asupersecretcode",
    resave: true,
    saveUninitialized: true
}));
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(passport_1.default.initialize());
router.use(passport_1.default.session());
// Routes
router.get("/", function (req, res) {
    res.send("Api is working");
});
// - Auth 
router.use("/auth", require("./auth/router"));
module.exports = router;
//# sourceMappingURL=routes.js.map