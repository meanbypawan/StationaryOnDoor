const express  = require('express');
const indexController = require('../controller/index.controller');
const router = express.Router();

router.get("/",indexController.indexPage);

module.exports = router;