const express = require('express');
const auth = require('../middleware/auth');
const adminController = require('../controller/admin.controller');
const router = express.Router();

router.get("/",adminController.adminLoginPage);

router.post("/login",adminController.adminLoginPost);

router.get("/dashboard",auth.isAuth,adminController.adminDashBoard);
module.exports = router;