const express = require('express');
const categoryController = require('../controller/category.controller');
const auth = require('../middleware/auth');
const router = express.Router();

router.post("/add",auth.isAuth,categoryController.addCategory);

module.exports = router;