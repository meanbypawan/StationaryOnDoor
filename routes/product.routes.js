const express  = require('express');
const multer = require('multer');
const upload = multer({dest: 'public/images'});
const router = express.Router();
const productController = require('../controller/product.controller');
const auth = require('../middleware/auth');
router.get("/add-product",auth.isAuth,productController.addProductPage);
router.post("/add-product",auth.isAuth,upload.array('productImages'),productController.saveProduct);
module.exports = router;