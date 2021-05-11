//================
// AUTH =========
//==============
import { Router } from "express"
import { create_user, login_user } from "./user/services"
const router: Router = require("express").Router()

router.get("/", (req, res) => {
  res.send("Auth Routes")
})

router.post("/register", create_user)

router.post("/login", login_user)

module.exports = router