const Category = require('../model/category.model');
const path = require("path");
const Product = require("../model/product.model");
exports.saveProduct = (request, response, next) => {
    console.log(request.files.productImages);
    console.log(request.files.productImages.length);
    let frontView = "", backView = "", leftView = "", rightView = "";
    let product = new Product();
    product.categoryId = request.body.categoryId;
    product.productName = request.body.productName;
    product.productPrice = request.body.productPrice;
    product.productQty = request.body.productQty;
    product.productDescription = request.body.productDescription;
    product.frontViewImage = "";
    product.backViewImage = "";
    product.leftViewImage = "";
    product.rightViewImage = "";
    if (request.files.productImages.length > 0) {
        console.log("Insided  if");

        if (request.files.productImages[0]) {
            let file = request.files.productImages[0];
            frontView = new Date().getTime() + file.name;
            let filePath = path.join(__dirname, "../", "public/images", frontView);
            product.frontViewImage = frontView;
            file.mv(filePath, err => {
                if (!err) {
                    if (request.files.productImages[1]) {
                        file = request.files.productImages[1];
                        backView = new Date().getTime() + file.name;
                        filePath = path.join(__dirname, "../", "public/images", backView);
                        product.backViewImage = backView;
                        file.mv(filePath, err => {
                            if (!err) {
                                if (request.files.productImages[2]) {
                                    file = request.files.productImages[2];
                                    leftView = new Date().getTime() + file.name;
                                    filePath = path.join(__dirname, "../", "public/images", leftView);
                                    product.leftViewImage = leftView;
                                    file.mv(filePath, err => {
                                        if (!err) {
                                            if (request.files.productImages[3]) {
                                                file = request.files.productImages[3];
                                                rightView = new Date().getTime() + file.name;
                                                filePath = path.join(__dirname, "../", "public/images", rightView);
                                                product.rightViewImage = rightView;
                                                file.mv(filePath, err => {
                                                    product.save()
                                                        .then(result => {
                                                            return response.send("Product Saved..");
                                                        })
                                                        .catch(err => {
                                                            return response.send("Product Not Saved..");
                                                        });
                                                });
                                            }
                                            else {
                                                product.save()
                                                    .then(result => {
                                                        return response.send("Product Saved..");
                                                    })
                                                    .catch(err => {
                                                        return response.send("Product Not Saved..");
                                                    });
                                            }
                                        }
                                    });
                                }
                                else {
                                    product.save()
                                        .then(result => {
                                            return response.send("Product Saved..");
                                        })
                                        .catch(err => {
                                            return response.send("Product Not Saved..");
                                        });
                                }
                            }
                        });
                    }
                    else {
                        product.save()
                            .then(result => {
                                return response.send("Product Saved..");
                            })
                            .catch(err => {
                                return response.send("Product Not Saved..");
                            });
                    }
                }
            });
        }
    }
    else{
        let file = request.files.productImages;
        frontView = new Date().getTime() + file.name;
        let filePath = path.join(__dirname, "../", "public/images", frontView);
        product.frontViewImage = frontView;
        file.mv(filePath,err=>{
          if(!err){
            product.save()
            .then(result => {
                return response.send("Product Saved..");
            })
            .catch(err => {
                return response.send("Product Not Saved..");
            });
          }
        });
    }
};
exports.addProductPage = (request, response, next) => {
    Category.fetchAllCategory()
        .then(results => {
            console.log(results);
            return response.render("admin/add_product.ejs", {
                title: "Add product",
                categories: results
            });

        })
        .catch(err => {
            console.log(err);
            return response.send("Erro.....");
        });
};