"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var services_1 = require("./user/services");
var router = require("express").Router();
router.get("/", function (req, res) {
    res.send("Auth Routes");
});
router.post("/register", services_1.create_user);
router.post("/login", services_1.login_user);
module.exports = router;
//# sourceMappingURL=router.js.map