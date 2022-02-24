const express  = require('express');
const indexController = require('../controller/index.controller');
const router = express.Router();

router.get("/",indexController.indexPage);
router.get("/login",indexController.loginPage);
router.get("/signup",indexController.signup);
router.get("/signout",indexController.signout);
router.post("/login",indexController.login);
module.exports = router;