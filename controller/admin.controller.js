const Admin = require('../model/admin.model');
exports.adminLoginPage = (request,response,next)=>{
    response.render("admin/admin_login.ejs",{
        title: "Login"
    });
};
exports.adminLoginPost = (request,response,next)=>{
   const email = request.body.email;
   const password = request.body.password;
   let admin = new Admin(email,password);
   admin.checkAdmin().then(results=>{
     if(results.length>0)
       console.log("Login Succes....");
     else
       console.log("Login Failed...");  
   }).catch(err=>{
       console.log(err);
   });
};