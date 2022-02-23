const Category = require('../model/category.model');
const Product = require('../model/product.model');
exports.indexPage = (request,response,next)=>{
    Promise.all([Category.fetchAllCategory(),Product.fetchAllProduct()])
    .then(results=>{
        return response.render("index.ejs",{
            title: "Home",
            categoryList: results[0],
            productList: results[1]
        });
    })
    .catch(err=>{
        console.log(err);
        return response.send("Error.....");
    });
    
}