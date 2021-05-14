//================
// AUTH =========
//==============
import { NextFunction, Request, Response, Router } from "express"
import passport from "passport"
import { isAuth } from "./middleware/auth"
import { create_user, delete_user, login_user } from "./services"
const router: Router = require("express").Router()



router.get("/", isAuth, (req, res) => {
  res.send(req.user)
})
router.post("/register", create_user)

router.post("/login", passport.authenticate("local"), login_user)

router.delete("/", isAuth, delete_user)

router.get("/protected", isAuth, (req, res) => {
  res.send("Protected Route")
})

module.exports = router