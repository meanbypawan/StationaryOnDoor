const express = require('express');
const categoryController = require('../controller/category.controller');
const auth = require('../middleware/auth');
const router = express.Router();

const multer = require('multer');
const upload = multer({dest: 'public/images'});

router.post("/add",auth.isAuth,upload.single('categoryImage'),categoryController.addCategory);

module.exports = router;