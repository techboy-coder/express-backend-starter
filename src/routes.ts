const bodyParser = require('body-parser');
const chalk = require("chalk")
import { Request, Response, Router } from "express"
import { TokenIndexer } from "morgan";
const router: Router = require("express").Router()
var morgan = require('morgan')
import cors from "cors"
import session from "express-session";
import passport from "passport";


export const morganMiddleware = morgan(function (tokens: TokenIndexer, req: Request, res: Response) {
  return [
    '\n',
    chalk.hex('#ff4757').bold('🔥  Morgan --> '),
    chalk.hex('#34ace0').bold(tokens.method(req, res)),
    chalk.hex('#ffb142').bold(tokens.status(req, res)),
    chalk.hex('#ff5252').bold(tokens.url(req, res)),
    chalk.hex('#2ed573').bold(tokens['response-time'](req, res) + ' ms'),
    chalk.hex('#f78fb3').bold('@ ' + tokens.date(req, res)),
    chalk.yellow(tokens['remote-addr'](req, res)),
    chalk.hex('#fffa65').bold('from ' + tokens.referrer(req, res)),
    chalk.hex('#1e90ff')(tokens['user-agent'](req, res)),
  ].join(' ');
});

router.use(morganMiddleware);
router.use(cors({ origin: "http://localhost:3000", credentials: true }))
router.use(session({
  secret: "asupersecretcode",
  resave: true,
  saveUninitialized: true
}))
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(passport.initialize())
router.use(passport.session())

// Routes
router.get("/", (req, res) => {
  res.send("Api is working")
})

// - Auth 
router.use("/auth", require("./auth/router"))



module.exports = router