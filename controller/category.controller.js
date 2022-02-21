const Category = require('../model/category.model');
const path = require('path');
exports.addCategory = (request,response,next)=>{
  const file = request.files.categoryImage;
  const fileName = new Date().getTime()+file.name;
  if(file){
    const filePath  = path.join(__dirname,"../","public/images",fileName);
    file.mv(filePath,err=>{
      if(!err){
        if(request.body.categoryName && file){
          let category = new Category(request.body.categoryName,fileName);
          category.save().then(result=>{
              response.redirect("/admin/dashboard");
          }).catch(err=>{
              response.send("Erro.........");
          });
        }  
      }
      else
        response.send("Error.........");
    });
  }
};