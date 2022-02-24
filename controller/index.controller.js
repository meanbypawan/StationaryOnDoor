const Category = require('../model/category.model');
const Product = require('../model/product.model');
const User = require('../model/user.model');
exports.login = (request,response,next)=>{
  let user = new User();
  user.email = request.body.email;
  user.password = request.body.password;
  user.checkUser().
  then(result=>{
     if(result.length!=0){
         request.session.current_user_id = result[0].id;
        return response.redirect("/"); 
     }
   })
  .catch(err=>{
      console.log(err);
      return response.send("Erro.....");
  });
}
exports.signout = (request,response,next)=>{
    request.session.current_user_id = null;
    request.session.destroy();
    response.redirect("/");
}
exports.signup = (request,response,next)=>{
    response.render("signup.ejs",{
        title: "Sign up"
    });
}
exports.loginPage = (request,response,next)=>{
  response.render("login.ejs",{
      title: "User Login"
  }) 
};
exports.indexPage = (request,response,next)=>{
    let currentUserId = request.session.current_user_id;
    Promise.all([Category.fetchAllCategory(),Product.fetchAllProduct(currentUserId)])
    .then(results=>{
        return response.render("index.ejs",{
            title: "Home",
            categoryList: results[0],
            productList: results[1],
            isLoggedIn: request.session.current_user_id
        });
    })
    .catch(err=>{
        console.log(err);
        return response.send("Error.....");
    });
    
}