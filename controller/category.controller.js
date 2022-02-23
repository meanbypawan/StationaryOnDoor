const Category = require('../model/category.model');
const path = require('path');
exports.addCategory = (request,response,next)=>{
  let category = new Category();
  category.categoryName = request.body.categoryName;
  category.categoryImage = request.file.filename;
  category.save()
  .then(result=>{
    response.redirect("/admin/dashboard");
  })
  .catch(err=>{
    response.send("Error.......");
  });
};